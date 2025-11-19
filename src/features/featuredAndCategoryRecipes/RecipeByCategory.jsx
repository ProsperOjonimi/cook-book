import { foodCategories } from "../../utils/categories";
import Category from "./Category";

function RecipeByCategory() {
  console.log(foodCategories);
  return (
    <div className="bg-orange-100 px-2 pt-11">
      <h2 className="text-center text-2xl font-bold">
        Find Recipes by Category
      </h2>
      <div className="mt-4 flex flex-wrap justify-center gap-5">
        {foodCategories.map((c) => (
          <Category image={c.image} name={c.name} key={c.name} />
        ))}
      </div>
    </div>
  );
}

export default RecipeByCategory;
