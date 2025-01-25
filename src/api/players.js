import axios from "axios";

export const fetchTierData = async (mode) => {
  const { data } = await axios.get(`http://localhost:6969/api/tier/${mode}`);

  console.log("data fetched", data);
  return data;
};
