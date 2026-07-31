import { useEffect, useMemo, useState } from "react";

import Card from "./Card";
import EmptyState from "./EmptyState";
import TablePagination from "./TablePagination";
import TableSkeleton from "./TableSkeleton";

const DataTable = ({
  title,
  subtitle,
  headerAction,

  columns = [],
  data = [],
  loading = false,

  renderActions,

  rowsPerPage = 10,

  emptyState,

  selectable = false,
  selectedRows = [],
  onRowSelect,

  onRowClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;

    return data.slice(start, start + rowsPerPage);
  }, [currentPage, data, rowsPerPage]);

  if (loading) {
    return (
      <Card>
        <TableSkeleton
          rows={rowsPerPage}
          columns={
            columns.length + (renderActions ? 1 : 0) + (selectable ? 1 : 0)
          }
        />
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      {(title || subtitle || headerAction) && (
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            {title && (
              <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            )}

            {subtitle && (
              <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
            )}
          </div>

          {headerAction}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              {selectable && (
                <th className="w-12 px-5 py-4 text-center">
                  <input type="checkbox" />
                </th>
              )}

              {columns.map((column) => (
                <th
                  key={column.key}
                  className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-gray-700"
                >
                  {column.label}
                </th>
              ))}

              {renderActions && (
                <th className="w-32 px-5 py-4 text-center text-sm font-semibold text-gray-700">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={
                    columns.length +
                    (renderActions ? 1 : 0) +
                    (selectable ? 1 : 0)
                  }
                  className="py-16"
                >
                  {emptyState ?? <EmptyState />}
                </td>
              </tr>
            ) : (
              paginatedData.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => onRowClick?.(row)}
                  className={`
                    border-b
                    transition
                    duration-200
                    hover:bg-gray-50
                    ${onRowClick ? "cursor-pointer" : ""}
                  `}
                >
                  {selectable && (
                    <td
                      className="px-5 py-4 text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row.id)}
                        onChange={() => onRowSelect?.(row.id)}
                      />
                    </td>
                  )}

                  {columns.map((column, index) => (
                    <td
                      key={column.key}
                      className={`px-5 py-4 whitespace-nowrap text-sm ${
                        index === 0
                          ? "font-semibold text-gray-900"
                          : "text-gray-700"
                      }`}
                    >
                      {column.render ? column.render(row) : row[column.key]}
                    </td>
                  ))}

                  {renderActions && (
                    <td
                      className="px-5 py-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex justify-center gap-2">
                        {renderActions(row)}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="border-t">
          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </Card>
  );
};

export default DataTable;
