import DashboardLayout from "../../dashboard/components/DashboardLayout";
import PageHeader from "../../../components/common/PageHeader";

import CriticalDeviceTable from "../components/CriticalDevicesTable";

import useCriticalDevices from "../hooks/useCriticalDevices";

const CriticalDevices = () => {
  const { devices, loading, error, refresh } = useCriticalDevices();

  return (
    <DashboardLayout>
      <PageHeader
        title="Critical Devices"
        description="Devices exceeding configured resource thresholds."
      />

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Failed to load critical devices.
        </div>
      )}

      <CriticalDeviceTable devices={devices} loading={loading} />
    </DashboardLayout>
  );
};

export default CriticalDevices;
