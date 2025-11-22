/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { searchRecipe } from "../search/SearchSlice";
import { useNavigate } from "react-router-dom";

function Category({ image, name }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSearch() {
    dispatch(searchRecipe(name));
    navigate("/category");
  }
  return (
    <div
      className="flex cursor-pointer items-center gap-3 rounded-lg bg-white px-4 py-1"
      onClick={handleSearch}
    >
      <img src={image} alt={name} className="h-10 w-10 rounded-full" />
      <p>{name}</p>
    </div>
  );
}

export default Category;
