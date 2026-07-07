import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="relative hidden w-80 md:block">
      <FiSearch
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />

      <input
        type="text"
        placeholder="Search servers, logs, alerts..."
        className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
};

export default SearchBar;
