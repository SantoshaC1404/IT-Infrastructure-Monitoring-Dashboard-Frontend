const colors = {
  online: "bg-green-100 text-green-700",

  offline: "bg-red-100 text-red-700",

  warning: "bg-yellow-100 text-yellow-700",

  running: "bg-green-100 text-green-700",

  stopped: "bg-gray-200 text-gray-700",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        font-semibold
        capitalize
        ${colors[status]}
      `}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
