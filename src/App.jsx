import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home, { loader as newsLoader } from "./Home";
import RecipesPage from "./features/recipes/RecipesPage";
import { getCategoryMeals, getMeals } from "./services/apiRecipes";
import store from "./Store";
import NotFound from "./ui/Error";
import RecipeInfo, {
  loader as recipeInfoLoader,
} from "./features/recipes/RecipeInfo";
import RecipeCategoryPage from "./features/recipes/RecipeCategoryPage";
import FavoritesPage from "./features/favorites/FavoritesPage";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: newsLoader,
      },
      {
        path: "/recipes",
        element: <RecipesPage />,
        loader: async function loader() {
          const storeData = store.getState();
          const query = storeData.search.query;
          const recipes = await getMeals(query);

          return recipes;
        },
        errorElement: <NotFound />,
      },
      {
        path: "/recipes/:id",
        element: <RecipeInfo />,
        loader: recipeInfoLoader,
        errorElement: <NotFound />,
      },
      {
        path: "/category",
        element: <RecipeCategoryPage />,
        loader: async function loader() {
          const storeData = store.getState();
          const query = storeData.search.query;
          const categoryRecipes = await getCategoryMeals(query);

          return categoryRecipes;
        },
        errorElement: <NotFound />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
        errorElement: <NotFound />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
