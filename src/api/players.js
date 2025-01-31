import axios from "axios";

export const fetchTierData = async (mode) => {
  const { data } = await axios.get(
    `https://tame-bananas-scream.loca.lt/api/tiers/${mode}`
  );
  return data;
};

export const fetchPlayerData = async (ign) => {
  const { data } = await axios.get(
    `https://tame-bananas-scream.loca.lt/api/search?ign=${ign}`
  );
  return data;
};
