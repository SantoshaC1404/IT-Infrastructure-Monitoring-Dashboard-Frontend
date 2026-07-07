import Card from "../common/Card";

const StatsCard = ({
  title,
  value,
  subtitle,
  icon,
  iconBg = "bg-blue-100",
  iconColor = "text-blue-600",
}) => {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-800">{value}</h2>

          <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconBg}`}
        >
          <div className={`text-2xl ${iconColor}`}>{icon}</div>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
