import { useMemo, useState } from "react";

import Card from "./Card";
import EmptyState from "./EmptyState";
import LoadingSpinner from "./LoadingSpinner";
import TablePagination from "./TablePagination";
import Card from "./Card";

const DataTable = ({ columns, data, renderActions }) => {
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row).join(" ").toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  return (
    <Card>
      <div className="overflow-x-auto">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="mb-4 w-72 rounded-lg border px-4 py-2"
        />

        <table className="min-w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-600"
                >
                  {column.label}
                </th>
              ))}

              {renderActions && (
                <th className="px-4 py-3 text-center">Actions</th>
              )}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (renderActions ? 1 : 0)}
                  className="py-10 text-center text-gray-500"
                >
                  No records found.
                </td>
              </tr>
            ) : (
              paginatedData.map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  {columns.map((column) => (
                    <td key={column.key} className="px-4 py-3">
                      {column.render ? column.render(row) : row[column.key]}
                    </td>
                  ))}

                  {renderActions && (
                    <td className="px-4 py-3 text-center">
                      {renderActions(row)}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </Card>
  );
};

export default DataTable;
