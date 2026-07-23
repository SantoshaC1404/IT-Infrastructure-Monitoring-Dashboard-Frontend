const EmptyState = ({
  title = "No Data Found",
  description = "There are no records available.",
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>

      <p className="mt-2 text-sm text-gray-500">{description}</p>

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};

export default EmptyState;
