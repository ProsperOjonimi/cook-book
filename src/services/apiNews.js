const apiKey = import.meta.env.VITE_NEWS_API_KEY;
export async function fetchNews() {
  const res = await fetch(
    `https://newsdata.io/api/1/latest?apikey=${apiKey}=food`,
  );
  const data = await res.json();
  console.log(data);
}
