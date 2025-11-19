import { useState } from "react";

function FeaturedMeals() {
  const [curFeaturedMeal, setCurFeaturedMeal] = useState({
    id: 1,
    name: "Spaghetti Carbonara",
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
  });
  return (
    <div className="bg-orange-100">
      <div className="-mt-16 flex flex-col justify-center">
        <h1 className="mb-3 text-center text-xl font-bold">Featured Recipes</h1>
        <div className="flex justify-center">
          <button className="mr-3 text-3xl">&larr;</button>
          <div className="h-56 w-64">
            <img src={curFeaturedMeal.image} className="rounded-lg" />
            <p className="mt-2 text-center font-semibold">
              Spaghetti Carbonara
            </p>
          </div>
          <button className="ml-3 text-3xl">&rarr;</button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedMeals;
//  style={{
//               backgroundImage:
//                 "url('https://www.themealdb.com/images/media/meals/vrspxw1511791072.jpg')",
//             }}
