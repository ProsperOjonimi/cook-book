async function getMeals() {
  const res = await fetch(
    `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`,
  );
}
