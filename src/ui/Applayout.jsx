import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loader from "./Loader";

function Applayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <NavBar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Applayout;
