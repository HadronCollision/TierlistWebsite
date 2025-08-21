import axios from "axios";

// const API_URL = "https://tierlist-server.vercel.app/api";
const API_URL = "http://localhost:6969/api";

export const fetchTierData = async (mode, from, count) => {
  const { data } = await axios.get(
    `${API_URL}/tiers/${mode}?from=${from}&count=${count}`
  );
  return data;
};

export const fetchPlayerData = async (ign) => {
  const { data } = await axios.get(`${API_URL}/search?ign=${ign}`);
  return data;
};

export const fetchLeaderboardData = async (lb) => {
  const { data } = await axios.get(`${API_URL}/leaderboard/${lb}`);
  return data;
};

export const fetchSubhumanData = async () => {
  const { data } = await axios.get(`${API_URL}/subhuman`);
  return data;
};
