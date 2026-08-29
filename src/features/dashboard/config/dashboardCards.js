import {
    FiActivity,
    FiAlertTriangle,
    FiCheckCircle,
    FiServer,
    FiSlash,
    FiXCircle,
} from "react-icons/fi";
import { IoNotificationsCircleSharp } from "react-icons/io5";

export const getDashboardCards = (summary, navigate) => [
  {
    title: "Total Devices",
    value: summary.totalDevices,
    subtitle: "Registered devices",
    icon: FiServer,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    onClick: () => navigate("/devices"),
  },

  {
    title: "Online Devices",
    value: summary.onlineDevices,
    subtitle: "Currently reachable",
    icon: FiCheckCircle,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    onClick: () => navigate("/devices?status=online"),
  },

  {
    title: "Offline Devices",
    value: summary.offlineDevices,
    subtitle: "Need attention",
    icon: FiXCircle,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    onClick: () => navigate("/devices?status=offline"),
  },

  {
    title: "Monitoring Enabled",
    value: summary.monitoringEnabled,
    subtitle: "Active monitoring",
    icon: FiActivity,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    onClick: () => navigate("/devices?monitoring=enabled"),
  },

  {
    title: "Monitoring Disabled",
    value: summary.monitoringDisabled,
    subtitle: "Monitoring turned off",
    icon: FiSlash,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    onClick: () => navigate("/devices?monitoring=disabled"),
  },

  {
    title: "Critical Alerts",
    value: summary.criticalDevices,
    subtitle: "Devices requiring attention",
    icon: FiAlertTriangle,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    onClick: () => navigate("/devices?view=critical"),
  },

  {
    title: "Alerts",
    value: summary.alerts,
    subtitle: "Devices requiring attention",
    icon: IoNotificationsCircleSharp,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    onClick: () => navigate("/alerts"),
  },
];
