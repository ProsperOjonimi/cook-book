import { useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import Recipe from "./Recipe";
function RecipesPage() {
  const navigate = useNavigate();

  const data = useLoaderData();

  const count = data.meals.length;

  const { query } = useSelector((state) => state.search);

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
        <Recipe data={data} />
      </main>
    </div>
  );
}

export default RecipesPage;
