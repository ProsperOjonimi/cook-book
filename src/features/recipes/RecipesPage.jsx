function RecipesPage() {
  return (
    <div className="flex flex-col">
      <header className="flex flex-col gap-3 bg-orange-50 px-10 py-4">
        <div className="flex justify-between">
          {" "}
          <p className="">
            <span className="mr-2">&larr;</span>
            Back
          </p>
          <p className="">{`Search: "Rice"`}</p>
        </div>
        <p className="">24 Recipes found</p>
      </header>

      <main className="flex h-[100%] justify-center bg-orange-100 py-20">
        <div className="h-80 w-80 border border-black">a</div>
      </main>
    </div>
  );
}

export default RecipesPage;
