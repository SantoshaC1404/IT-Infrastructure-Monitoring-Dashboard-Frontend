import {
  FiServer,
  FiCheckCircle,
  FiXCircle,
  FiBox,
  FiAlertTriangle,
  FiCpu,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCard from "../../components/dashboard/StatsCard";
import LineChartCard from "../../components/charts/LineChartCard";

const Dashboard = () => {
  const cards = [
    {
      title: "Total Servers",
      value: 28,
      subtitle: "+2 added this week",
      icon: <FiServer />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Online Servers",
      value: 25,
      subtitle: "89% healthy",
      icon: <FiCheckCircle />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Offline Servers",
      value: 3,
      subtitle: "Needs attention",
      icon: <FiXCircle />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      title: "Containers",
      value: 42,
      subtitle: "Running",
      icon: <FiBox />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Critical Alerts",
      value: 7,
      subtitle: "Investigate",
      icon: <FiAlertTriangle />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "CPU Average",
      value: "42%",
      subtitle: "Last 24 hours",
      icon: <FiCpu />,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
  ];

  const cpuData = [
    { time: "09:00", cpu: 20 },
    { time: "10:00", cpu: 32 },
    { time: "11:00", cpu: 45 },
    { time: "12:00", cpu: 52 },
    { time: "13:00", cpu: 38 },
    { time: "14:00", cpu: 60 },
    { time: "15:00", cpu: 41 },
  ];

  const memoryData = [
    { time: "09:00", memory: 45 },
    { time: "10:00", memory: 55 },
    { time: "11:00", memory: 52 },
    { time: "12:00", memory: 61 },
    { time: "13:00", memory: 64 },
    { time: "14:00", memory: 59 },
    { time: "15:00", memory: 70 },
  ];

  return (
    <DashboardLayout>
      <DashboardHeader />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <StatsCard key={card.title} {...card} />
        ))}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <LineChartCard
            title="CPU Usage"
            data={cpuData}
            dataKey="cpu"
            color="#2563eb"
          />

          <LineChartCard
            title="Memory Usage"
            data={memoryData}
            dataKey="memory"
            color="#10b981"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
