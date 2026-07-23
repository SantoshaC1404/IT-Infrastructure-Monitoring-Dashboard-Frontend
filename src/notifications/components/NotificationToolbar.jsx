import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { FiCheck, FiTrash2 } from "react-icons/fi";

const NotificationToolbar = () => {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <Input placeholder="Search notifications..." />

      <div className="flex gap-3">
        <Button variant="secondary">
          <FiCheck />
          Mark All Read
        </Button>

        <Button variant="danger">
          <FiTrash2 />
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default NotificationToolbar;
