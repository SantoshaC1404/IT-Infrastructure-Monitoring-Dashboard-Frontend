import Button from "../../../components/common/Button";
import { FiRefreshCw } from "react-icons/fi";

const DashboardHeader = ({ onRefresh, loading, lastUpdated }) => {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        <p className="mt-1 text-gray-500">Welcome back, Administrator.</p>

        <p className="mt-1 text-sm text-gray-500">
          Last updated: {lastUpdated}
        </p>
      </div>

      <Button loading={loading} onClick={onRefresh}>
        <FiRefreshCw />
        Refresh
      </Button>
    </div>
  );
};

export default DashboardHeader;
