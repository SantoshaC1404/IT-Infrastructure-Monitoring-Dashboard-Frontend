import { useEffect, useMemo, useState } from "react";

import Card from "./Card";
import EmptyState from "./EmptyState";
import TablePagination from "./TablePagination";
import TableSkeleton from "./TableSkeleton";

const DataTable = ({
  title,
  subtitle,
  action,

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

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const displayedRows = useMemo(() => {
    if (showAll) return data;

    const start = (currentPage - 1) * rowsPerPage;

    return data.slice(start, start + rowsPerPage);
  }, [data, currentPage, rowsPerPage, showAll]);

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
    <Card>
      {(title || subtitle || action) && (
        <div className="mb-6 flex items-start justify-between">
          <div>
            {title && (
              <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
            )}

            {subtitle && <p className="mt-2 text-gray-500">{subtitle}</p>}
          </div>

          {action}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-y bg-gray-50">
            <tr>
              {selectable && (
                <th className="px-8 py-5 text-left">
                  <input type="checkbox" />
                </th>
              )}

              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-8 py-5 text-left text-lg font-semibold text-slate-700"
                >
                  {column.label}
                </th>
              ))}

              {renderActions && (
                <th className="px-8 py-5 text-center text-lg font-semibold text-slate-700">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {displayedRows.length === 0 ? (
              <tr>
                <td
                  colSpan={
                    columns.length +
                    (renderActions ? 1 : 0) +
                    (selectable ? 1 : 0)
                  }
                >
                  {emptyState ?? <EmptyState />}
                </td>
              </tr>
            ) : (
              displayedRows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => onRowClick?.(row)}
                  className={`border-b transition hover:bg-gray-50 ${
                    onRowClick ? "cursor-pointer" : ""
                  }`}
                >
                  {selectable && (
                    <td
                      className="px-8 py-6"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row.id)}
                        onChange={() => onRowSelect?.(row.id)}
                      />
                    </td>
                  )}

                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-8 py-6 text-lg text-slate-700"
                    >
                      {column.render ? column.render(row) : row[column.key]}
                    </td>
                  ))}

                  {renderActions && (
                    <td
                      className="px-8 py-6 text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {renderActions(row)}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {data.length > rowsPerPage && (
        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="font-medium text-blue-600 hover:underline"
          >
            {showAll ? "Show Less" : "View All"}
          </button>

          {!showAll && totalPages > 1 && (
            <TablePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      )}
    </Card>
  );
};

export default DataTable;
