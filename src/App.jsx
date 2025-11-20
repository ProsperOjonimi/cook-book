import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home from "./Home";
import RecipesPage from "./features/recipes/RecipesPage";
import { getMeals } from "./services/apiRecipes";
import store from "./Store";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: newsLoader,
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
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
