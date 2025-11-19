import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="flex gap-2">
      <input
        placeholder="Search recipes..."
        className="rounded-lg bg-orange-100 py-1 pl-3 placeholder:text-neutral-600"
      />

      <button className="flex w-6 justify-center rounded-lg bg-yellow-300 px-1 py-2">
        {<FaSearch />}
      </button>
    </div>
  );
}

export default SearchBar;
