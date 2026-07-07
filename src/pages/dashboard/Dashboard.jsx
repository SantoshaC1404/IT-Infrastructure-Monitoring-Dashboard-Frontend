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

import {
  statsCards,
  cpuData,
  memoryData,
  recentAlerts,
  recentLogs,
} from "../../data/dashboardData";
import RecentAlerts from "../../components/dashboard/RecentAlerts";
import RecentLogs from "../../components/dashboard/RecentLogs";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardHeader />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {statsCards.map((card) => (
          <StatsCard key={card.title} {...card} />
        ))}
      </div>

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

        <div className="mt-8">
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <RecentAlerts alerts={recentAlerts} />

            <RecentLogs logs={recentLogs} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
