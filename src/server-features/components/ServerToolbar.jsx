import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";

import { FiPlus, FiRefreshCw } from "react-icons/fi";

const ServerToolbar = () => {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}

      <div className="flex flex-1 flex-col gap-3 md:flex-row">
        <Input placeholder="Search servers..." />

        <select className="rounded-lg border border-gray-300 px-4">
          <option>All Status</option>

          <option>Online</option>

          <option>Offline</option>

          <option>Warning</option>
        </select>

        <select className="rounded-lg border border-gray-300 px-4">
          <option>All OS</option>

          <option>Ubuntu</option>

          <option>Windows</option>

          <option>CentOS</option>
        </select>
      </div>

      {/* Right */}

      <div className="flex gap-3">
        <Button variant="secondary">
          <FiRefreshCw />
          Refresh
        </Button>

        <Button>
          <FiPlus />
          Add Server
        </Button>
      </div>
    </div>
  );
};

export default ServerToolbar;
