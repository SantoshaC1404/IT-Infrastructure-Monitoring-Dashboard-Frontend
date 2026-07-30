import {
    FiServer,
    FiCheckCircle,
    FiXCircle,
    FiBox,
    FiAlertTriangle,
    FiCpu,
    FiActivity,
    FiSlash,
} from "react-icons/fi";


export const getDashboardCards = (summary) => [
    {
        title: "Total Devices",
        value: summary.totalDevices,
        subtitle: "Registered devices",
        icon: FiServer,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
    },
    {
        title: "Online Devices",
        value: summary.onlineDevices,
        subtitle: "Currently reachable",
        icon: FiCheckCircle,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
    },
    {
        title: "Offline Devices",
        value: summary.offlineDevices,
        subtitle: "Need attention",
        icon: FiXCircle,
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
    },
    {
        title: "Monitoring Enabled",
        value: summary.monitoringEnabled,
        subtitle: "Active monitoring",
        icon: FiActivity,
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
    },
    {
        title: "Monitoring Disabled",
        value: summary.monitoringDisabled,
        subtitle: "Monitoring turned off",
        icon: FiSlash,
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-600",
    },
];