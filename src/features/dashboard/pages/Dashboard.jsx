import DashboardLayout from "../components/DashboardLayout";
import DashboardHeader from "../components/DashboardHeader";

import DashboardStats from "../components/DashboardStats";

import useDashboard from "../hooks/useDashboard";
import LineChartCard from "../../../components/charts/LineChartCard";
import AreaChartCard from "../../../components/charts/AreaChartCard";
import PieChartCard from "../../../components/charts/PieChartCard";
import NetworkChartCard from "../../../components/charts/NetworkChartCard";
import RecentAlerts from "../../../components/dashboard/RecentAlerts";
import RecentLogs from "../../../components/dashboard/RecentLogs";
import DeviceStatusTable from "../components/DeviceStatusTable";

import {
  statsCards,
  cpuData,
  memoryData,
  diskData,
  networkData,
  recentAlerts,
  recentLogs,
  deviceStatus,
} from "../data/dashboardData";
import useDashboardDevices from "../hooks/useDashboardDevices";

const Dashboard = () => {
  const { summary, loading, refresh } = useDashboard();

  const { devices, loading: devicesLoading } = useDashboardDevices();

  return (
    <DashboardLayout>
      <DashboardHeader onRefresh={refresh} loading={loading} />

      <DashboardStats summary={summary} />

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

      {/* Device Status */}
      {/* <div className="mt-8">
        <DeviceStatusTable devices={deviceStatus} />
      </div> */}

      <div className="mt-8">
        <DeviceStatusTable
          devices={devices}
          loading={devicesLoading}
        />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
