const SectionHeader = ({ title, subtitle, action }) => {
  return (
    <div className="mb-5 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>

        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>

      {action}
    </div>
  );
};

export default SectionHeader;
