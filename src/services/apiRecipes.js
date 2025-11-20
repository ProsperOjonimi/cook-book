export async function getMeals() {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=pizza`,
  );
  const data = await res.json();
  console.log(data);
}
