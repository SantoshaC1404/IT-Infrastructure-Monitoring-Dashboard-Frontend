import DashboardLayout from "../../components/layout/DashboardLayout";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCard from "../../components/dashboard/StatsCard";

import LineChartCard from "../../components/charts/LineChartCard";
import AreaChartCard from "../../components/charts/AreaChartCard";
import PieChartCard from "../../components/charts/PieChartCard";
import NetworkChartCard from "../../components/charts/NetworkChartCard";

import RecentAlerts from "../../components/dashboard/RecentAlerts";
import RecentLogs from "../../components/dashboard/RecentLogs";
import ServerStatusTable from "../../components/dashboard/ServerStatusTable";

import {
  statsCards,
  cpuData,
  memoryData,
  diskData,
  networkData,
  recentAlerts,
  recentLogs,
  serverStatus,
} from "../../data/dashboardData";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardHeader />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {statsCards.map((card) => (
          <StatsCard key={card.title} {...card} />
        ))}
      </div>

      {/* Charts */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <LineChartCard
          title="CPU Usage"
          data={cpuData}
          dataKey="cpu"
          color="#2563eb"
        />

        <AreaChartCard
          title="Memory Usage"
          data={memoryData}
          dataKey="memory"
          color="#10b981"
        />

        <PieChartCard title="Disk Usage" data={diskData} />

        <NetworkChartCard title="Network Traffic" data={networkData} />
      </div>

      {/* Alerts & Logs */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RecentAlerts alerts={recentAlerts} />
        <RecentLogs logs={recentLogs} />
      </div>

      {/* Server Status */}
      <div className="mt-8">
        <ServerStatusTable servers={serverStatus} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
