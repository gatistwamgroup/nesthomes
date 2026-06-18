import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Leads from "../pages/Leads";
import Gallery from "../pages/Gallery";
import Testimonials from "../pages/Testimonials";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

import ProtectedRoute from "./ProtectedRoute";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:token" element={<ResetPassword/>} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
      <Route path="leads" element={<ProtectedRoute><Leads /></ProtectedRoute>} />
      <Route path="gallery" element={<ProtectedRoute><Gallery/></ProtectedRoute>} />
      <Route path="testimonials" element={<ProtectedRoute><Testimonials /></ProtectedRoute>} />
      <Route path="analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
      <Route path="settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/admin/login" />} />
    </Routes>
  );
};

export default AdminRoutes;