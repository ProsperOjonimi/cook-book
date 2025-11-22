import { Link } from "react-router-dom";
import FavoritesButton from "../../ui/FavoritesButton";

/* eslint-disable react/prop-types */
function Recipe({ data, favoritesClick }) {
  const recipeBanner = data.strMealThumb;
  const recipeName = data.strMeal;
  const recipeCategory = data.strCategory;
  const recipeArea = data.strArea;
  const ingredients1 = data.strIngredient1;
  const ingredients2 = data.strIngredient2;
  const ingredients3 = data.strIngredient3;
  const video = data.strYoutube;
  const recipeID = data.idMeal;

  return (
    <div className="w-80 rounded-2xl border bg-white sm:w-96">
      <img src={recipeBanner} alt="" className="rounded-2xl" />
      <div className="flex flex-col bg-white pb-4">
        <h2 className="mt-3 flex flex-wrap items-center justify-center gap-7 text-center text-2xl font-semibold text-yellow-800">
          {recipeName}

          <span className="mt-1" onClick={favoritesClick}>
            <FavoritesButton />
          </span>
        </h2>
        <p className="ml-20 mt-4 text-yellow-600">
          <span>{recipeCategory}</span> • <span>{recipeArea}</span>
        </p>
        <p className="ml-5 mt-5 text-yellow-950">Ingredients</p>

        <p className="ml-5">• {ingredients1} </p>
        <p className="ml-5">• {ingredients2}</p>
        <p className="ml-5">• {ingredients3}</p>
        <p className="ml-5 text-lg">...</p>

        <div className="ml-3 mt-3 flex gap-5">
          <Link
            to={video}
            className="rounded-xl border border-yellow-400 p-2 transition-colors duration-300 hover:bg-yellow-400"
          >
            Watch full video
          </Link>
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

export default Recipe;
