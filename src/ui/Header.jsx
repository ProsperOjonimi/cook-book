import HeroImage from "./HeroImage";
import SearchBar from "../features/search/SearchBar";

function Header() {
  return (
    <header className="flex justify-between bg-orange-50 pl-8">
      <div className="pl-8 pt-11">
        <h1 className="mb-5 text-3xl font-bold leading-10">
          Learn cooking in a<br />
          simple way
        </h1>
        <p className="mb-4">
          Over 10,000+ food recipes from all around the world
          <br /> you can try. Start cooking now!
        </p>
        <SearchBar />
      </div>
      <HeroImage />
    </header>
  );
}

export default Header;
