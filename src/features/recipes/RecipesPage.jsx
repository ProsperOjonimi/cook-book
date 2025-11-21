import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import Recipe from "./Recipe";
import { useState } from "react";
import { saveRecipe } from "./RecipesSlice";
import store from "../../Store";
function RecipesPage() {
  const navigate = useNavigate();
  const [curRecipe, setCurRecipe] = useState(0);

  const data = useLoaderData();
  const dispatch = useDispatch();
  dispatch(saveRecipe(data));
  console.log(store.getState());

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
        <span
          className="z-30 -mr-6 mt-96 cursor-pointer rounded-full text-5xl font-extrabold"
          onClick={handlePrevRecipe}
        >
          &larr;
        </span>
        <Recipe data={data.meals[curRecipe]} />
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

export default RecipesPage;
