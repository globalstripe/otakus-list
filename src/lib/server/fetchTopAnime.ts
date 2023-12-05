import { TopAnimeResponse } from "../types/jikan-top.types";

export const fetchTopAnime = async () => {
  console.log('Running fetchTopAnime from ' + "https://api.jikan.moe/v4/top/anime" +' on Server')
  const res = await fetch("https://api.jikan.moe/v4/top/anime");
  const result: TopAnimeResponse = await res.json();

  console.log('Returning data ...')
  return result.data;
};
