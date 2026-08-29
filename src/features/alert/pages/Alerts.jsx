import DashboardLayout from "../../dashboard/components/DashboardLayout";
import PageHeader from "../../../components/common/PageHeader";

import AlertsTable from "../components/AlertsTable";

import useAlerts from "../hooks/useAlerts";

const Alerts = () => {
  const { alerts, loading, acknowledgeAlert, resolveAlert } = useAlerts({
    limit: 100,
  });

  return (
    <DashboardLayout>
      <PageHeader
        title="Alerts"
        description="Monitor and manage infrastructure alerts."
      />

      <div className="mt-6">
        <AlertsTable
          alerts={alerts}
          loading={loading}
          onAcknowledge={acknowledgeAlert}
          onResolve={resolveAlert}
        />
      </div>
    </DashboardLayout>
  );
};

export default Alerts;
