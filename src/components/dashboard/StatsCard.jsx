import Card from "../common/Card";

const StatsCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBg,
  iconColor,
}) => {
  return (
    <div
      className="
        group
        rounded-xl
        bg-white
        p-6
        shadow
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">{title}</p>
          <h2 className="mt-2 text-3xl font-bold">{value}</h2>
          <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
        </div>

        <div
          className={`${iconBg} rounded-lg p-3 transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className={`text-3xl ${iconColor}`} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
