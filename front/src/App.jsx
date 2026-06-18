import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy Loaded Components
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Expectations = React.lazy(() => import("./pages/Expectations"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const FAQ = React.lazy(() => import("./pages/FAQ"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Testimonials = React.lazy(() => import("./pages/Testimonials"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AdminRoutes = React.lazy(() => import("./admin/routes/AdminRoutes"));

// Loading Fallback Component
const Loader = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-[#355B5E]"></div>
  </div>
);

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <Toaster position="top-right" />
      {!isAdminRoute && <Navbar />}
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/expectations" element={<Expectations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;