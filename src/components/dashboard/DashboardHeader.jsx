import Button from "../common/Button";
import { FiRefreshCw } from "react-icons/fi";

const DashboardHeader = () => {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        <p className="mt-1 text-gray-500">Welcome back, Administrator.</p>
      </div>

      <Button>
        <FiRefreshCw />
        Refresh
      </Button>
    </div>
  );
};

export default DashboardHeader;
