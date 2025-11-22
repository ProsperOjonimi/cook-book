import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FavoriteRecipes from "./FavoriteRecipes";
import { useSelector } from "react-redux";
function FavoritesPage() {
  const navigate = useNavigate();
  const [curRecipe, setCurRecipe] = useState(0);

  const data = useSelector((state) => state.favorites);
  console.log(data);
  console.log(localStorage.getItem("favoriteMeals"));

  function handleNextRecipe() {
    if (curRecipe === data.length - 1) return;

    setCurRecipe((cur) => cur + 1);
  }

  function handlePrevRecipe() {
    if (curRecipe === 0) return;
    setCurRecipe((cur) => cur - 1);
  }
  return (
    <div className="flex flex-col">
      <header className="flex items-center bg-orange-50 px-10 py-4">
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
        </div>
      </header>

      <main className="flex h-auto justify-center bg-orange-100 py-12">
        {data.length === 0 ? (
          <p className="my-auto text-xl font-semibold">No meals here</p>
        ) : (
          <>
            <span
              className="z-30 -mr-6 mt-96 cursor-pointer rounded-full text-5xl font-extrabold"
              onClick={handlePrevRecipe}
            >
              &larr;
            </span>
            <FavoriteRecipes data={data[curRecipe]} />
            <span
              className="-ml-6 mt-96 cursor-pointer text-5xl font-extrabold"
              onClick={handleNextRecipe}
            >
              &rarr;
            </span>
          </>
        )}
      </main>
    </div>
  );
}

export default FavoritesPage;
