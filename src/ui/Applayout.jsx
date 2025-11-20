import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Applayout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <NavBar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Applayout;
