import { useQuery } from "@tanstack/react-query";
import { fetchPlayerData } from "../api/API";

export const useFetchPlayerData = (ign) => {
  return useQuery({
    queryFn: () => fetchPlayerData(ign),
    queryKey: ["player", ign?.toLowerCase()],
    staleTime: 300_000,
    gcTime: 300_000,
    enabled: !!ign,
  });
};
