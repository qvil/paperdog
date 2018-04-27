import config from "config/config.json";

export async function getNews() {
  const API_KEY = config.apiKey;
  const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`;

  return (await fetch(url)).json();
}
