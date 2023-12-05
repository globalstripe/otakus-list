import { prisma } from "../db";

export const fetchWatchlistData = async () => {
  console.log('Fetching watchlist from PlanetScale MySQL')
  const res = await prisma.animeList.findMany();
  console.log('Return result')
  return res;
};
