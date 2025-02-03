import { useQuery } from "@tanstack/react-query";
import { fetchPlayerData } from "../api/players";

export const useFetchPlayerData = (ign) => {
  return useQuery({
    queryFn: () => fetchPlayerData(ign),
    queryKey: ["player", ign?.toLowerCase()],
    staleTime: 60_000,
    gcTime: 60_000,
    enabled: !!ign,
  });
};
