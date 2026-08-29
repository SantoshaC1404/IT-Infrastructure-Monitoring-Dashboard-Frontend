import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";

import Dashboard from "../features/dashboard/pages/Dashboard";
import Device from "../features/devices/pages/Devices";
import CriticalDevices from "../features/devices/pages/CriticalDevices";
import Users from "../features/users/pages/Users";

import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";

import Alerts from "../features/alert/pages/Alerts";

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
          // <ProtectedRoute>
          //   <Dashboard />
          // </ProtectedRoute>
          <Dashboard />
        }
      />

      <Route
        path="/devices"
        element={
          // <ProtectedRoute>
          //   <Device />
          // </ProtectedRoute>
          <Device />
        }
      />

      <Route
        path="/devices/critical"
        element={
          // <ProtectedRoute>
          //   <CriticalDevices />
          // </ProtectedRoute>
          <CriticalDevices />
        }
      />

      <Route
        path="/users"
        element={
          // <ProtectedRoute>
          //   <Users />
          // </ProtectedRoute>
          <Users />
        }
      />

      <Route
        path="/alerts"
        element={
          // <ProtectedRoute>
          //   <Alerts />
          // </ProtectedRoute>
          <Alerts />
        }
      />

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
