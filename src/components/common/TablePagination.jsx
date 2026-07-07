const TablePagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-between border-t px-4 py-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      <p className="text-sm text-gray-500">
        Page {currentPage} of {totalPages}
      </p>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default TablePagination;
