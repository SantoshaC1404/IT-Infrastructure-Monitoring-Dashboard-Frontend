export const notifications = [
    {
        id: 1,
        type: "critical",
        title: "Server Offline",
        message: "Ubuntu-01 is unreachable.",
        time: "2 mins ago",
        read: false,
    },
    {
        id: 2,
        type: "warning",
        title: "High CPU Usage",
        message: "Docker Host CPU reached 95%.",
        time: "5 mins ago",
        read: false,
    },
    {
        id: 3,
        type: "info",
        title: "SSL Certificate",
        message: "Certificate expires in 7 days.",
        time: "1 hour ago",
        read: true,
    },
    {
        id: 4,
        type: "success",
        title: "Backup Completed",
        message: "Database backup finished successfully.",
        time: "Today 08:15 AM",
        read: true,
    },
];