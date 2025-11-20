export async function getMeals(query) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
  );
  const data = await res.json();
  console.log(data);
  return data;
}
