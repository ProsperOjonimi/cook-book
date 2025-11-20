import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { searchRecipe } from "./SearchSlice";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const { query } = useSelector((state) => state.search);
  console.log(query);
  function handleSearch() {}
  dispatch(searchRecipe(searchQuery));

  return (
    <div className="flex gap-2">
      <input
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="rounded-lg bg-orange-100 py-1 pl-3 placeholder:text-neutral-600 focus:outline-yellow-400 sm:py-2 sm:pl-4 sm:placeholder:text-xl md:w-80"
      />

      <button
        className="flex w-10 items-center justify-center rounded-lg bg-yellow-300"
        onClick={handleSearch}
      >
        {<FaSearch />}
      </button>
    </div>
  );
}

export default SearchBar;
