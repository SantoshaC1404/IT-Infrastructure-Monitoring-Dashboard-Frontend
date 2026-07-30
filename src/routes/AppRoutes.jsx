import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../features/dashboard/pages/Dashboard";
import Device from "../features/devices/pages/Devices";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/devices" element={<Device />} />
    </Routes>
  );
};

export default AppRoutes;
