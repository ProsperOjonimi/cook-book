const apiKey = import.meta.env.VITE_NEWS_API_KEY;
export async function fetchNews() {
  const res = await fetch(
    `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=cook&category=food`,
  );
  const data = await res.json();
  return data;
}
