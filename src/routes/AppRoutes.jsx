import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";

import Dashboard from "../features/dashboard/pages/Dashboard";
import Device from "../features/devices/pages/Devices";
import CriticalDevices from "../features/devices/pages/CriticalDevices";
import Users from "../features/users/pages/Users";

import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />

      <Route
        path="/register"
        element={
          <GuestRoute>
            <Register />
          </GuestRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/devices"
        element={
          <ProtectedRoute>
            <Device />
          </ProtectedRoute>
        }
      />

      <Route
        path="/devices/critical"
        element={
          <ProtectedRoute>
            <CriticalDevices />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
