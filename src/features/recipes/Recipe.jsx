/* eslint-disable react/prop-types */
function Recipe({ data }) {
  const recipeBanner = data.meals[0].strMealThumb;
  const recipeName = data.meals[0].strMeal;
  const recipeCategory = data.meals[0].strCategory;
  const recipeArea = data.meals[0].strArea;
  const ingredients1 = data.meals[0].strIngredient1;
  const ingredients2 = data.meals[0].strIngredient2;
  const ingredients3 = data.meals[0].strIngredient3;
  return (
    <div className="w-80 rounded-2xl border bg-white">
      <img src={recipeBanner} alt="" className="rounded-2xl" />
      <div className="flex flex-col bg-white pb-4">
        <h2 className="mt-3 text-center text-2xl font-semibold text-yellow-800">
          {recipeName}
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
          <a
            href=""
            className="rounded-xl border border-yellow-400 p-2 transition-colors duration-300 hover:bg-yellow-400"
          >
            Watch full video
          </a>
          <a
            href=""
            className="rounded-xl border border-yellow-400 p-2 transition-colors duration-300 hover:bg-yellow-400"
          >
            View full recipe
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
