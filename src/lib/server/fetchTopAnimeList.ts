import { TopAnimeResponse } from "../types/jikan-top.types";
import { modifyTrendingArray } from "../utils";
import { fetchTopAnime } from "./fetchTopAnime";
import { fetchWatchlistData } from "./fetchWatchlistData";

export const getTopAnimeList = async (): Promise<TopAnimeResponse["data"]> => {
  console.log('Running getTopAnimeList on Server')

  const [topAnime, watchlist] = await Promise.all([
    fetchTopAnime(),
    fetchWatchlistData(),
  ]);

  modifyTrendingArray(topAnime, watchlist);

  return topAnime;
};
