import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { searchRecipe } from "./SearchSlice";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSearch() {
    if (!searchQuery) return alert("Please input a recipe");
    dispatch(searchRecipe(searchQuery));
    navigate("/recipes");
  }

  return (
    <div className="flex gap-2">
      <input
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="rounded-lg bg-orange-100 py-1 pl-3 placeholder:text-neutral-600 focus:outline-yellow-400 sm:py-2 sm:pl-4 sm:placeholder:text-xl md:w-80"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
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
