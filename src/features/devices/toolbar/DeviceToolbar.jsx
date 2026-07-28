import Button from "../../../components/common/Button";
import SearchInput from "../../../components/common/SearchInput";

import { FiPlus } from "react-icons/fi";

const DeviceToolbar = ({ search, onSearchChange, onAddDevice }) => {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <SearchInput
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search devices..."
        className="w-full md:w-80"
      />

      <Button onClick={onAddDevice} leftIcon={<FiPlus />}>
        Add Device
      </Button>
    </div>
  );
};

export default DeviceToolbar;
