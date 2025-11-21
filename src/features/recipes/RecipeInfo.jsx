import { Link } from "react-router-dom";

function RecipeInfo() {
  return (
    <div className="mt-8 flex flex-col items-center px-2 pb-6">
      <h1 className="mb-7 text-4xl font-semibold text-yellow-800">
        Recipe title
      </h1>
      <img
        src="https://www.themealdb.com/images/media/meals/54xzk31760524666.jpg"
        alt=""
        className="mb-4 w-56 rounded-lg"
      />
      <p className="mb-6 text-xl text-yellow-600">Seafood • Spanish</p>
      <div>
        <h2 className="mb-5 text-2xl font-semibold text-yellow-800">
          Ingredients & Measurements
        </h2>
        <p className="ml-5 text-xl">• 1 tbsp Olive Oil</p>
        <p className="ml-5 text-xl">• 1 sliced leek</p>
        <p className="mb-5 ml-5 text-xl">• 110g Chorizo</p>
      </div>
      <div className="mb-5 flex flex-col items-center">
        <h2 className="mb-5 text-2xl font-semibold text-yellow-800">
          Instructions
        </h2>
        <p className="ml-5 text-xl">
          Step 1: Heat the oil in a deep frying pan <br /> Step 2: Tip in the
          peas and cook for 5 mins
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="mb-2 text-2xl font-semibold text-yellow-800">
          External Links
        </h2>
        <p className="text-xl text-yellow-600 hover:text-yellow-800">
          <Link>Source</Link>
        </p>

        <p className="text-xl text-yellow-600 hover:text-yellow-800">
          <Link>Youtube</Link>
        </p>
      </div>
    </div>
  );
}

export default RecipeInfo;
