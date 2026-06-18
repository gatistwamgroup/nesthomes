import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import http from "http";
import { Server } from "socket.io";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

// Create HTTP Server and integrate Socket.io
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
  }
});

// Make io accessible in controllers
app.set("io", io);

io.on("connection", (socket) => {
  console.log("Admin connected to socket:", socket.id);
  socket.on("disconnect", () => {
    console.log("Admin disconnected:", socket.id);
  });
});

// CORS configuration (allow frontend origin) - MUST BE FIRST
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true
}));

// Security Middlewares
app.use(helmet({
  crossOriginResourcePolicy: false,
}));

// Request logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Increased to 1000 to prevent blocking during development/normal usage
  message: { success: false, message: "Too many requests from this IP, please try again later." }
});
app.use("/api", limiter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Fix for express-mongo-sanitize query getter issue
app.use((req, res, next) => {
  if (req.query) {
    Object.defineProperty(req, 'query', { value: { ...req.query }, writable: true, configurable: true });
  }
  next();
});

app.use(mongoSanitize());
app.use(xss());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/testimonials", testimonialRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "The Nest API Running",
  });
});

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});