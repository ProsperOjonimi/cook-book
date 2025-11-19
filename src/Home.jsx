import FeaturedMeals from "./features/featuredRecipes/FeaturedMeals";
import Header from "./ui/Header";

function Home() {
  return (
    <div className="grid grid-rows-7">
      <Header />
      <FeaturedMeals />
    </div>
  );
}

export default Home;
