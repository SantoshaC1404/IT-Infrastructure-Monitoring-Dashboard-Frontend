const StatsCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBg,
  iconColor,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="
        group
        h-full
        rounded-xl
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        cursor-pointer
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-500">{title}</p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">{value}</h2>

          <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
        </div>

        <div
          className={`${iconBg} flex h-14 w-14 items-center justify-center rounded-xl shrink-0`}
        >
          <Icon className={`text-3xl ${iconColor}`} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
