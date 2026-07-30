import {
    FiServer,
    FiCheckCircle,
    FiXCircle,
    FiBox,
    FiAlertTriangle,
    FiCpu,
} from "react-icons/fi";

export const statsCards = [
    {
        title: "Total Devices",
        value: 28,
        subtitle: "+2 added this week",
        icon: FiServer,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
    },
    {
        title: "Online Devices",
        value: 25,
        subtitle: "89% healthy",
        icon: FiCheckCircle,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
    },
    {
        title: "Offline Devices",
        value: 3,
        subtitle: "Needs attention",
        icon: FiXCircle,
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
    },
    {
        title: "Containers",
        value: 42,
        subtitle: "Running",
        icon: FiBox,
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
    },
    {
        title: "Critical Alerts",
        value: 7,
        subtitle: "Investigate",
        icon: FiAlertTriangle,
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
    },
    {
        title: "CPU Average",
        value: "42%",
        subtitle: "Last 24 Hours",
        icon: FiCpu,
        iconBg: "bg-cyan-100",
        iconColor: "text-cyan-600",
    },
];

export const cpuData = [
    { time: "09:00", cpu: 20 },
    { time: "10:00", cpu: 32 },
    { time: "11:00", cpu: 45 },
    { time: "12:00", cpu: 52 },
    { time: "13:00", cpu: 38 },
    { time: "14:00", cpu: 60 },
    { time: "15:00", cpu: 41 },
];

export const memoryData = [
    { time: "09:00", memory: 45 },
    { time: "10:00", memory: 55 },
    { time: "11:00", memory: 52 },
    { time: "12:00", memory: 61 },
    { time: "13:00", memory: 64 },
    { time: "14:00", memory: 59 },
    { time: "15:00", memory: 70 },
];

export const recentAlerts = [
    {
        id: 1,
        title: "High CPU Usage",
        server: "Ubuntu-01",
        time: "2 minutes ago",
        status: "warning",
    },
    {
        id: 2,
        title: "Disk Usage Above 90%",
        server: "Docker-Host",
        time: "5 minutes ago",
        status: "warning",
    },
    {
        id: 3,
        title: "Server Offline",
        server: "Windows-03",
        time: "15 minutes ago",
        status: "offline",
    },
];

export const recentLogs = [
    {
        id: 1,
        message: "Nginx service restarted",
        server: "Ubuntu-01",
        time: "2 mins ago",
    },
    {
        id: 2,
        message: "Docker container started",
        server: "Docker Host",
        time: "8 mins ago",
    },
    {
        id: 3,
        message: "SSL certificate renewed",
        server: "Web Server",
        time: "30 mins ago",
    },
];

export const deviceStatus = [
    {
        id: 1,
        hostname: "Ubuntu-01",
        ip: "192.168.1.101",
        cpu: 42,
        memory: 58,
        disk: 70,
        status: "online",
    },
    {
        id: 2,
        hostname: "Windows-01",
        ip: "192.168.1.102",
        cpu: 12,
        memory: 32,
        disk: 41,
        status: "offline",
    },
    {
        id: 3,
        hostname: "Docker-Host",
        ip: "192.168.1.103",
        cpu: 64,
        memory: 71,
        disk: 80,
        status: "warning",
    },
];

export const diskData = [
    {
        name: "Used",
        value: 72,
    },
    {
        name: "Free",
        value: 28,
    },
];

export const networkData = [
    {
        time: "09:00",
        incoming: 120,
        outgoing: 90,
    },
    {
        time: "10:00",
        incoming: 150,
        outgoing: 110,
    },
    {
        time: "11:00",
        incoming: 170,
        outgoing: 130,
    },
    {
        time: "12:00",
        incoming: 140,
        outgoing: 95,
    },
    {
        time: "13:00",
        incoming: 200,
        outgoing: 150,
    },
];
