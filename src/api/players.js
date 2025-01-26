import axios from "axios";

export const fetchTierData = async (mode) => {
  const { data } = await axios.get(`http://localhost:6969/api/tier/${mode}`);
  return data;
};

export const fetchPlayerData = async (ign) => {
  const { data } = await axios.get(`http://localhost:6969/api/search/${ign}`);
  return data;
};
