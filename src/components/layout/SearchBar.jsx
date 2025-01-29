import React, { useState } from "react";
import { useSearch } from "../../context/searchContext";
import { useQuery } from "@tanstack/react-query";
import { fetchPlayerData } from "../../api/players";
import { useModal } from "../../context/modalContext";

const SearchBar = ({ style }) => {
  const { search, setSearch } = useSearch();
  const { setModalState } = useModal();
  const [error, setError] = useState("");

  const query = useQuery({
    queryFn: () => fetchPlayerData(search),
    queryKey: ["player", search],
    staleTime: 60_000,
    gcTime: 60_000,
    enabled: search.length > 0,
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!query.data?.error && query.isFetched) {
      setModalState({
        show: true,
        player: {
          ign: query.data.ign,
          country: query.data.country,
          rank: query.data.rank,
        },
      });
    }

    setError(query?.data?.message);
  };

  return (
    <form style={style} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>{error}</p>
    </form>
  );
};

export default SearchBar;
