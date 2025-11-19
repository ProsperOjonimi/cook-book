import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="flex gap-2">
      <input
        placeholder="Search recipes..."
        className="rounded-lg bg-orange-100 py-1 pl-3 placeholder:text-neutral-600 focus:outline-yellow-400 sm:py-2 sm:pl-4 sm:placeholder:text-xl md:w-80"
      />

      <button className="flex w-10 items-center justify-center rounded-lg bg-yellow-300">
        {<FaSearch />}
      </button>
    </div>
  );
}

export default SearchBar;
