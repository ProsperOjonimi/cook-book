/* eslint-disable react/prop-types */

import FavoritesButton from "../../ui/FavoritesButton";
import { Link } from "react-router-dom";

function RecipeCategory({ data, favoriteClick }) {
  const recipeBanner = data.strMealThumb;
  const recipeName = data.strMeal;
  const recipeID = data.idMeal;

  return (
    <div className="w-80 rounded-2xl border bg-white sm:w-96">
      <img src={recipeBanner} alt="" className="rounded-2xl" />
      <div className="flex flex-col bg-white pb-4">
        <h2 className="mt-3 flex flex-wrap items-center justify-center gap-7 text-center text-2xl font-semibold text-yellow-800">
          {recipeName}

          <span className="mt-1" onClick={favoriteClick}>
            <FavoritesButton />
          </span>
        </h2>

        <div className="ml-3 mt-3 flex justify-center">
          <Link
            className="rounded-xl border border-yellow-400 p-2 transition-colors duration-300 hover:bg-yellow-400"
            to={`/recipes/${recipeID}`}
          >
            View full recipe
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeCategory;
