import {
    FiHome,
    FiServer,
    FiBox,
    FiSettings,
    FiCpu,
    FiFileText,
    FiAlertTriangle,
    FiShield,
    FiUsers,
    FiSliders,
} from "react-icons/fi";

export const menuSections = [
    {
        title: "Overview",
        items: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: FiHome,
            },
        ],
    },

    {
        title: "Infrastructure",
        items: [
            {
                title: "Devices",
                path: "/devices",
                icon: FiServer,
            },
            {
                title: "Docker",
                path: "/docker",
                icon: FiBox,
            },
            {
                title: "Services",
                path: "/services",
                icon: FiSettings,
            },
            {
                title: "Processes",
                path: "/processes",
                icon: FiCpu,
            },
        ],
    },

    {
        title: "Monitoring",
        items: [
            {
                title: "Logs",
                path: "/logs",
                icon: FiFileText,
            },
            {
                title: "Alerts",
                path: "/alerts",
                icon: FiAlertTriangle,
            },
            {
                title: "SSL",
                path: "/ssl",
                icon: FiShield,
            },
        ],
    },

    {
        title: "Administration",
        items: [
            {
                title: "Users",
                path: "/users",
                icon: FiUsers,
            },
            {
                title: "Settings",
                path: "/settings",
                icon: FiSliders,
            },
        ],
    },
];