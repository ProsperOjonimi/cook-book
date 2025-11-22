import { useLoaderData } from "react-router-dom";
import FeaturedMeals from "./features/featuredAndCategoryRecipes/FeaturedMeals";
import RecipeByCategory from "./features/featuredAndCategoryRecipes/RecipeByCategory";
import News from "./features/news/News";
import { fetchNews } from "./services/apiNews";
import Header from "./ui/Header";

function Home() {
  const data = useLoaderData();

  return (
    <div className="">
      <Header />
      <FeaturedMeals />
      <RecipeByCategory />
      <News news={data} />
    </div>
  );
}
let cachedNews = null;
export async function loader() {
  if (cachedNews) {
    return cachedNews;
  }
  const news = await fetchNews();
  cachedNews = news;
  return cachedNews;
}
export default Home;
