import { FiPlus } from "react-icons/fi";
import Button from "../../../components/common/Button";

const AddDeviceButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} className="flex items-center gap-2">
      <FiPlus size={18} />
      Add Device
    </Button>
  );
};

export default AddDeviceButton;
