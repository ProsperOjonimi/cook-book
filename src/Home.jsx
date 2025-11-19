import FeaturedMeals from "./features/featuredAndCategoryRecipes/FeaturedMeals";
import RecipeByCategory from "./features/featuredAndCategoryRecipes/RecipeByCategory";
import News from "./features/news/News";
import Header from "./ui/Header";

function Home() {
  return (
    <div className="">
      <Header />
      <FeaturedMeals />
      <RecipeByCategory />
      <News />
    </div>
  );
}

export default Home;
