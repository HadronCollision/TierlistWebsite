import React, { useEffect, useState } from "react";
import { useSearch } from "../../context/searchContext";
import { useQuery } from "@tanstack/react-query";
import { fetchPlayerData } from "../../api/players";
import { useModal } from "../../context/modalContext";
import * as stylex from "@stylexjs/stylex";

const SearchBar = ({ style }) => {
  const { search, setSearch } = useSearch();
  const { setModalState } = useModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("Search...");

  const { data, isFetched } = useQuery({
    queryFn: () => fetchPlayerData(searchQuery),
    queryKey: ["player", searchQuery?.toLowerCase()],
    staleTime: 60_000,
    gcTime: 60_000,
    enabled: !!searchQuery,
  });

  useEffect(() => {
    if (data?.error) {
      setSearch("");
      setSearchQuery("");
      setPlaceholder("Player not found");
      return;
    }

    if (isFetched) {
      setModalState({
        show: true,
        player: {
          ign: data.ign,
          country: data.country,
          rank: data.rank,
        },
      });
      setSearch("");
      setSearchQuery("");
    }
  }, [isFetched]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSearchQuery(search);
  };

  return (
    <form className="search" {...stylex.props(style)} onSubmit={onSubmit}>
      <input
        id="s"
        type="search"
        autoComplete="off"
        placeholder={placeholder}
        value={search}
        onFocus={() => {
          setSearch("");
          setPlaceholder("Search...");
        }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
