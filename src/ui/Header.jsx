import HeroImage from "./HeroImage";
import SearchBar from "../features/search/SearchBar";

function Header() {
  return (
    <header className="flex flex-col items-center gap-20 bg-orange-50 pb-28 pl-3 pr-3 pt-14 lg:flex-row">
      <div className="pl-8">
        <h1 className="mb-5 text-3xl font-bold leading-10 sm:text-5xl">
          Learn cooking in a simple way
        </h1>
        <p className="mb-8 sm:text-xl">
          Over 10,000+ food recipes from all around the world you can try.
          <br /> Start cooking now!
        </p>
        <SearchBar />
      </div>
      <HeroImage />
    </header>
  );
}

export default Header;
