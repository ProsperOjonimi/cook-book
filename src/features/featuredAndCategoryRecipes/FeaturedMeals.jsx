import { useState } from "react";
import { mockMeals } from "../../utils/mockMeals";
import { useDispatch } from "react-redux";
import { searchRecipe } from "../search/SearchSlice";
import { useNavigate } from "react-router-dom";

function FeaturedMeals() {
  const [curFeaturedMealID, setCurFeaturedMealID] = useState(0);
  const curFeaturedMeal = mockMeals[curFeaturedMealID];
  const curFeaturedMealName = curFeaturedMeal.name;

  function handlenextMeal() {
    if (curFeaturedMealID === mockMeals.length - 1) return;
    setCurFeaturedMealID((cur) => cur + 1);
  }
  function handlepreviousMeal() {
    if (curFeaturedMealID === 0) return;
    setCurFeaturedMealID((cur) => cur - 1);
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSearch() {
    dispatch(searchRecipe(curFeaturedMealName));
    navigate("/recipes");
  }
  return (
    <div className="flex flex-col bg-orange-100">
      <div className="-mt-16 flex flex-col justify-center">
        <h1 className="mb-3 text-center text-2xl font-bold">
          Featured Recipes
        </h1>
        <div className="flex justify-center">
          <button className="mr-3 text-3xl" onClick={handlepreviousMeal}>
            &larr;
          </button>
          <div className="w-64 cursor-pointer sm:w-80 md:w-96">
            <img
              src={curFeaturedMeal.image}
              className="rounded-lg"
              onClick={handleSearch}
            />
            <p className="mt-2 text-center font-semibold">
              {curFeaturedMealName}
            </p>
          </div>
          <button className="ml-3 text-3xl" onClick={handlenextMeal}>
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedMeals;
