import { useEffect, useMemo, useState } from "react";

import DashboardHeader from "../components/DashboardHeader";
import DashboardLayout from "../components/DashboardLayout";
import DashboardStats from "../components/DashboardStats";
import DeviceStatusTable from "../components/DeviceStatusTable";

import DeviceHistoryChart from "../../monitoring/components/DeviceHistoryChart";

import useDashboard from "../hooks/useDashboard";
import useDashboardDevices from "../hooks/useDashboardDevices";

import RecentAlerts from "../../../components/dashboard/RecentAlerts";
import RecentLogs from "../../../components/dashboard/RecentLogs";

import { recentLogs } from "../data/dashboardData";

import useAlerts from "../../alert/hooks/useAlerts";
import useDeviceHistory from "../../monitoring/hooks/useDeviceHistory";

const Dashboard = () => {
  const { summary, loading, refresh, lastUpdated } = useDashboard();

  // const { devices, loading: devicesLoading } = useDashboardDevices();
  const { devices, loading: devicesLoading } = useDashboardDevices();

  const [selectedDevice, setSelectedDevice] = useState(null);

  const [hours, setHours] = useState(1);

  const [days, setDays] = useState();

  const { alerts, loading: alertsLoading } = useAlerts({
    limit: 5,
  });

  useEffect(() => {
    if (devices.length > 0 && !selectedDevice) {
      setSelectedDevice(devices[0].id);
    }
  }, [devices]);

  const { history } = useDeviceHistory(selectedDevice, {
    hours,
    days,
  });

  const selectedDeviceDetails = useMemo(() => {
    if (!selectedDevice) return null;
    return devices.find((device) => device.id === selectedDevice) ?? null;
  }, [devices, selectedDevice]);

  return (
    <DashboardLayout>
      <DashboardHeader
        onRefresh={refresh}
        loading={loading}
        lastUpdated={lastUpdated}
      />

      <DashboardStats summary={summary} />

      {/* Resource History */}
      <div className="mt-8">
        <DeviceHistoryChart
          history={history}
          selectedDevice={selectedDeviceDetails}
          devices={devices}
          selectedDeviceId={selectedDevice}
          onDeviceChange={setSelectedDevice}
          hours={hours}
          days={days}
          onHoursChange={setHours}
          onDaysChange={setDays}
        />
      </div>

      {/* Alerts & Logs */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RecentAlerts alerts={alerts} loading={alertsLoading} />
        <RecentLogs logs={recentLogs} />
      </div>

      {/* Device Status */}
      <div className="mt-8">
        <DeviceStatusTable devices={devices} loading={devicesLoading} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
