import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFavorites } from "../favorites/FavoritesMealSlice";

import RecipeCategory from "./RecipeCategory";
import Popup from "../../ui/Popup";
function RecipeCategoryPage() {
  const navigate = useNavigate();
  const [curRecipe, setCurRecipe] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const data = useLoaderData();

  if (!data.meals) throw new Error("Recipe not found");

  const count = data.meals.length;

  const { query } = useSelector((state) => state.search);

  function handleNextRecipe() {
    if (curRecipe === data.meals.length - 1) return;

    setCurRecipe((cur) => cur + 1);
  }

  function handlePrevRecipe() {
    if (curRecipe === 0) return;
    setCurRecipe((cur) => cur - 1);
  }
  function handleFavoriteMeal() {
    dispatch(setFavorites(data.meals[curRecipe]));
    setShowPopup(true);

    setTimeout(() => setShowPopup(false), 2000);
  }
  return (
    <div className="flex flex-col">
      <header className="flex flex-col gap-3 bg-orange-50 px-10 py-4">
        <div className="flex justify-between">
          {" "}
          <p className="text-lg font-semibold">
            <span
              className="mr-2 inline-block cursor-pointer text-3xl text-yellow-500"
              onClick={() => navigate(-1)}
            >
              &larr;
            </span>
            Back
          </p>
          <p className="mt-3">{`Search: "${query}"`}</p>
        </div>
        <p className="">
          <span className="font-semibold text-yellow-600">{count}</span> Recipes
          found
        </p>
      </header>

      <main className="flex h-auto justify-center bg-orange-100 py-12">
        {showPopup && <Popup />}
        <span
          className="z-30 -mr-6 mt-96 cursor-pointer rounded-full text-5xl font-extrabold"
          onClick={handlePrevRecipe}
        >
          &larr;
        </span>
        <RecipeCategory
          data={data.meals[curRecipe]}
          favoriteClick={handleFavoriteMeal}
        />
        <span
          className="-ml-6 mt-96 cursor-pointer text-5xl font-extrabold"
          onClick={handleNextRecipe}
        >
          &rarr;
        </span>
      </main>
    </div>
  );
}

export default RecipeCategoryPage;
