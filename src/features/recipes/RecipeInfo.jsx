import { Link, useLoaderData } from "react-router-dom";
import { getRecipeInfo } from "../../services/apiRecipes";

function RecipeInfo() {
  const loaderData = useLoaderData();
  console.log(loaderData);
  const mealName = loaderData.meals[0].strMeal;
  const mealImage = loaderData.meals[0].strMealThumb;
  const mealArea = loaderData.meals[0].strArea;
  const mealCategory = loaderData.meals[0].strCategory;
  const mealSource = loaderData.meals[0].strSource;
  const mealVideo = loaderData.meals[0].strYoutube;
  const mealInstructions = loaderData.meals[0].strInstructions;
  const ingredients1 = loaderData.meals[0].strIngredient1;
  const ingredients2 = loaderData.meals[0].strIngredient2;
  const ingredients3 = loaderData.meals[0].strIngredient3;
  const ingredients4 = loaderData.meals[0].strIngredient4;
  const ingredients5 = loaderData.meals[0].strIngredient5;
  const ingredients6 = loaderData.meals[0].strIngredient6;
  const ingredients7 = loaderData.meals[0].strIngredient7;
  const ingredients8 = loaderData.meals[0].strIngredient8;
  const ingredients9 = loaderData.meals[0].strIngredient9;
  const ingredients10 = loaderData.meals[0].strIngredient10;
  const ingredients11 = loaderData.meals[0].strIngredient11;
  const ingredients12 = loaderData.meals[0].strIngredient12;
  const ingredients13 = loaderData.meals[0].strIngredient13;
  const ingredients14 = loaderData.meals[0].strIngredient14;
  const ingredients15 = loaderData.meals[0].strIngredient15;
  const ingredients16 = loaderData.meals[0].strIngredient16;
  const ingredients17 = loaderData.meals[0].strIngredient17;
  const ingredients18 = loaderData.meals[0].strIngredient18;
  const ingredients19 = loaderData.meals[0].strIngredient19;
  const ingredients20 = loaderData.meals[0].strIngredient20;

  const measure1 = loaderData.meals[0].strMeasure1;
  const measure2 = loaderData.meals[0].strMeasure2;
  const measure3 = loaderData.meals[0].strMeasure3;
  const measure4 = loaderData.meals[0].strMeasure4;
  const measure5 = loaderData.meals[0].strMeasure5;
  const measure6 = loaderData.meals[0].strMeasure6;
  const measure7 = loaderData.meals[0].strMeasure7;
  const measure8 = loaderData.meals[0].strMeasure8;
  const measure9 = loaderData.meals[0].strMeasure9;
  const measure10 = loaderData.meals[0].strMeasure10;
  const measure11 = loaderData.meals[0].strMeasure11;
  const measure12 = loaderData.meals[0].strMeasure12;
  const measure13 = loaderData.meals[0].strMeasure13;
  const measure14 = loaderData.meals[0].strMeasure14;
  const measure15 = loaderData.meals[0].strMeasure15;
  const measure16 = loaderData.meals[0].strMeasure16;
  const measure17 = loaderData.meals[0].strMeasure17;
  const measure18 = loaderData.meals[0].strMeasure18;
  const measure19 = loaderData.meals[0].strMeasure19;
  const measure20 = loaderData.meals[0].strMeasure20;
  console.log(mealName);
  return (
    <div className="mt-8 flex flex-col items-center px-2 pb-6">
      <h1 className="mb-7 text-4xl font-semibold text-yellow-800">
        {mealName}
      </h1>
      <img src={mealImage} alt="" className="mb-4 w-56 rounded-lg" />
      <p className="mb-6 text-xl text-yellow-600">
        {mealCategory} • {mealArea}
      </p>
      <div>
        <h2 className="mb-5 text-2xl font-semibold text-yellow-800">
          Ingredients & Measurements
        </h2>
        <p className="ml-5 text-xl">
          {ingredients1 && `• ${measure1} ${ingredients1}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients2 && `• ${measure2} ${ingredients2}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients3 && `• ${measure3} ${ingredients3}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients4 && `• ${measure4} ${ingredients4}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients5 && `• ${measure5} ${ingredients5}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients6 && `• ${measure6} ${ingredients6}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients7 && `• ${measure7} ${ingredients7}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients8 && `• ${measure8} ${ingredients8}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients9 && `• ${measure9} ${ingredients9}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients10 && `• ${measure10} ${ingredients10}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients11 && `• ${measure11} ${ingredients11}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients12 && `• ${measure12} ${ingredients12}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients13 && `• ${measure13} ${ingredients13}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients14 && `• ${measure14} ${ingredients14}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients15 && `• ${measure15} ${ingredients15}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients16 && `• ${measure16} ${ingredients16}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients17 && `• ${measure17} ${ingredients17}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients18 && `• ${measure18} ${ingredients18}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients19 && `• ${measure19} ${ingredients19}`}
        </p>
        <p className="ml-5 text-xl">
          {ingredients20 && `• ${measure20} ${ingredients20}`}
        </p>
      </div>
      <div className="mb-5 flex flex-col items-center">
        <h2 className="mb-5 mt-6 text-2xl font-semibold text-yellow-800">
          Instructions
        </h2>
        <p className="ml-5 text-xl">{mealInstructions}</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="mb-2 text-2xl font-semibold text-yellow-800">
          External Links
        </h2>
        <p className="text-xl text-yellow-600 hover:text-yellow-800">
          <Link to={mealSource}>Source</Link>
        </p>

        <p className="text-xl text-yellow-600 hover:text-yellow-800">
          <Link to={mealVideo}>Youtube</Link>
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  console.log(params);
  const result = await getRecipeInfo(params.id);
  return result;
}
export default RecipeInfo;
