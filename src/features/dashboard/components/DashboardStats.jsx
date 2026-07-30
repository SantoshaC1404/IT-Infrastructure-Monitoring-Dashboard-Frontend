import { FiServer, FiCheckCircle, FiXCircle, FiActivity } from "react-icons/fi";

import StatsCard from "./StatsCard";

const DashboardStats = ({ summary }) => {
  const cards = [
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
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatsCard key={card.title} {...card} />
      ))}
    </div>
  );
};

export default DashboardStats;
