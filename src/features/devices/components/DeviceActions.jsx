import {
  FiEye,
  FiEdit,
  FiTrash2,
  FiActivity,
  FiPlayCircle,
  FiPauseCircle,
} from "react-icons/fi";

import ActionMenu from "../../../components/common/ActionMenu";

const DeviceActions = ({ device }) => {
  const items = [
    {
      label: "View Details",
      icon: <FiEye />,
      onClick: () => console.log(device),
    },

    {
      label: "Edit Device",
      icon: <FiEdit />,
      onClick: () => console.log(device),
    },

    {
      label: "Test Connection",
      icon: <FiActivity />,
      onClick: () => console.log(device),
    },

    {
      label: device.monitoring_enabled
        ? "Disable Monitoring"
        : "Enable Monitoring",

      icon: device.monitoring_enabled ? <FiPauseCircle /> : <FiPlayCircle />,

      onClick: () => console.log(device),
    },

    {
      label: "Delete Device",
      icon: <FiTrash2 className="text-red-600" />,
      onClick: () => console.log(device),
    },
  ];

  return <ActionMenu items={items} />;
};

export default DeviceActions;
