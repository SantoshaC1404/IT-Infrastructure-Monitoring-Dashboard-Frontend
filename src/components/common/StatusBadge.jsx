const statusConfig = {
  online: {
    bg: "bg-green-100 text-green-700",
    dot: "bg-green-500",
  },

  offline: {
    bg: "bg-red-100 text-red-700",
    dot: "bg-red-500",
  },

  warning: {
    bg: "bg-yellow-100 text-yellow-700",
    dot: "bg-yellow-500",
  },

  running: {
    bg: "bg-green-100 text-green-700",
    dot: "bg-green-500",
  },

  stopped: {
    bg: "bg-gray-100 text-gray-700",
    dot: "bg-gray-500",
  },

  enabled: {
    bg: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
  },

  disabled: {
    bg: "bg-red-100 text-red-700",
    dot: "bg-red-500",
  },
};

const StatusBadge = ({ status }) => {
  const config = statusConfig[status] || {
    bg: "bg-gray-100 text-gray-700",
    dot: "bg-gray-500",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        capitalize
        ${config.bg}
      `}
    >
      <span
        className={`
          h-2.5
          w-2.5
          rounded-full
          ${config.dot}
          ${status === "online" || status === "running" ? "animate-pulse" : ""}
        `}
      />

      {status}
    </span>
  );
};

export default StatusBadge;
