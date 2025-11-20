import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home, { loader as newsLoader } from "./Home";
import RecipesPage from "./features/recipes/RecipesPage";

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
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
