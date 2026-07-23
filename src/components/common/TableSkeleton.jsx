const TableSkeleton = ({ rows = 8, columns = 7 }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="border-b bg-gray-50">
          <tr>
            {Array.from({ length: columns }).map((_, index) => (
              <th key={index} className="px-4 py-3">
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: rows }).map((_, row) => (
            <tr key={row} className="border-b">
              {Array.from({ length: columns }).map((_, col) => (
                <td key={col} className="px-4 py-4">
                  <div className="h-4 animate-pulse rounded bg-gray-100" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
