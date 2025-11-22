import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loader from "./Loader";

function Applayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <NavBar />

      {isLoading && <Loader />}
      <Outlet />

      <Footer />
    </div>
  );
}

export default Applayout;
