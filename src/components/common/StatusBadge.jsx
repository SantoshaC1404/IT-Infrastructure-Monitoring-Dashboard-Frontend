const STATUS_VARIANTS = {
  online: "bg-green-100 text-green-700",
  offline: "bg-red-100 text-red-700",
  warning: "bg-yellow-100 text-yellow-700",
  enabled: "bg-green-100 text-green-700",
  disabled: "bg-gray-200 text-gray-700",
  running: "bg-green-100 text-green-700",
  stopped: "bg-red-100 text-red-700",
};

const StatusBadge = ({ status }) => {
  const value = (status || "").toLowerCase();

  const classes = STATUS_VARIANTS[value] || "bg-gray-100 text-gray-700";

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        capitalize
        ${classes}
      `}
    >
      {value || "--"}
    </span>
  );
};

export default StatusBadge;
