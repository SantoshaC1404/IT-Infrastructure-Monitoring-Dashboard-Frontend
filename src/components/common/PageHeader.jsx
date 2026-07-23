const PageHeader = ({ title, description, actions }) => {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

        {description && <p className="mt-2 text-gray-500">{description}</p>}
      </div>

      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
};

export default PageHeader;
