import axios from "axios";

export const fetchTierData = async (mode) => {
  const { data } = await axios.get(
    `https://tierlist-server.vercel.app/api/tiers/${mode}`
  );
  return data;
};

export const fetchPlayerData = async (ign) => {
  const { data } = await axios.get(
    `https://tierlist-server.vercel.app/api/search?ign=${ign}`
  );
  return data;
};

export const fetchLeaderboardData = async (lb) => {
  const { data } = await axios.get(
    `https://tierlist-server.vercel.app/api/leaderboard/${lb}`
  );
  return data;
};
