import { useEffect, useMemo, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import Card from "./Card";
import EmptyState from "./EmptyState";
import TablePagination from "./TablePagination";
import TableSkeleton from "./TableSkeleton";

const DataTable = ({
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
    <Card>
      <div className="max-h-162.5 overflow-auto rounded-xl">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 z-20 border-b bg-white">
            <tr>
              {selectable && (
                <th className="w-12 px-4 py-4 text-center">
                  <input type="checkbox" />
                </th>
              )}

              {columns.map((column) => (
                <th
                  key={column.key}
                  className="whitespace-nowrap px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  {column.label}
                </th>
              ))}

              {renderActions && (
                <th className="w-20 px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
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
                    transition-all
                    duration-200
                    hover:bg-blue-50
                    ${onRowClick ? "cursor-pointer" : ""}
                  `}
                >
                  {selectable && (
                    <td
                      className="px-4 py-4 text-center"
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
                      className="whitespace-nowrap px-4 py-4"
                    >
                      {column.render ? column.render(row) : row[column.key]}
                    </td>
                  ))}

                  {renderActions && (
                    <td
                      className="px-4 py-4 text-center"
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

        {totalPages > 1 && (
          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </Card>
  );
};

export default DataTable;
