import axios from "axios";

export const fetchLeaderboardData = async (lb) => {
  const { data } = await axios.get(
    `http://localhost:6969/api/leaderboard/${lb}`
  );
  return data;
};
