import React, { useEffect, useState } from "react";
import { useSearch } from "../../context/searchContext";
import { useModal } from "../../context/modalContext";
import * as stylex from "@stylexjs/stylex";
import { useFetchPlayerData } from "../../hooks/useFetchPlayerData";
import { colors } from "../../tokens.stylex";

const SearchBar = ({ style }) => {
  const { search, setSearch } = useSearch();
  const { setModalState } = useModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("Search...");
  const { data, isFetched } = useFetchPlayerData(searchQuery);

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
    <form {...stylex.props(style)} onSubmit={onSubmit}>
      <input
        {...stylex.props(styles.search)}
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

const styles = stylex.create({
  search: {
    background:
      "rgba(0, 0, 0, 0.375) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQBJREFUeNqslI0RgyAMhdENWIEVWMEVXIGO0BW6Ah2hHcGOoCPYEewINFzBe9IA9id37w4kfEZesHHOCSYUqSPJML+RJlELDwN1pMHxMZNMkr8RTgyz2YPH5LmtwXpIHkOFmKhIlxowDmYAycKnHAHYcTCsSpXOJCie6YWDnXKLGeHLN2stGaqDsXXrX3GFcYcLrfhjtKEhffQ792gYT2nT6pJDjCw4z7ZGdGipOIqNbXIwFUARmCbKpMfYxsWJBmCEDoW7+gYUTAU2s3HJrK3AJvMLkqGHFLgWXTckm+SfSQexs+tLRqwVfgvjgMsvMAT689S5M/sk/I14kO5PAQYAuk6L1q+EdHMAAAAASUVORK5CYII=) no-repeat 8px 8px",
    textIndent: "16px",
    display: "inline-block",
    border: "0 none",
    width: 0,
    borderRadius: "20px",
    transition: "0.3s",
    outline: "none",
    padding: "10px 20px",
    cursor: "pointer",
    appearance: "none",
    fontWeight: "inherit",
    fontSize: "inherit",
    fontFamily: "inherit",
    color: colors.textColor,
    verticalAlign: "baseline",
    backgroundSize: "24px 24px",
    ":hover": {
      opacity: 1,
      background:
        "#292929 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQBJREFUeNqslI0RgyAMhdENWIEVWMEVXIGO0BW6Ah2hHcGOoCPYEewINFzBe9IA9id37w4kfEZesHHOCSYUqSPJML+RJlELDwN1pMHxMZNMkr8RTgyz2YPH5LmtwXpIHkOFmKhIlxowDmYAycKnHAHYcTCsSpXOJCie6YWDnXKLGeHLN2stGaqDsXXrX3GFcYcLrfhjtKEhffQ792gYT2nT6pJDjCw4z7ZGdGipOIqNbXIwFUARmCbKpMfYxsWJBmCEDoW7+gYUTAU2s3HJrK3AJvMLkqGHFLgWXTckm+SfSQexs+tLRqwVfgvjgMsvMAT689S5M/sk/I14kO5PAQYAuk6L1q+EdHMAAAAASUVORK5CYII=) 8px 8px no-repeat",
      backgroundSize: "24px 24px",
    },
    ":focus": {
      opacity: 1,
      background:
        "#292929 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQBJREFUeNqslI0RgyAMhdENWIEVWMEVXIGO0BW6Ah2hHcGOoCPYEewINFzBe9IA9id37w4kfEZesHHOCSYUqSPJML+RJlELDwN1pMHxMZNMkr8RTgyz2YPH5LmtwXpIHkOFmKhIlxowDmYAycKnHAHYcTCsSpXOJCie6YWDnXKLGeHLN2stGaqDsXXrX3GFcYcLrfhjtKEhffQ792gYT2nT6pJDjCw4z7ZGdGipOIqNbXIwFUARmCbKpMfYxsWJBmCEDoW7+gYUTAU2s3HJrK3AJvMLkqGHFLgWXTckm+SfSQexs+tLRqwVfgvjgMsvMAT689S5M/sk/I14kO5PAQYAuk6L1q+EdHMAAAAASUVORK5CYII=) 8px 8px no-repeat",
      backgroundSize: "24px 24px",
      width: "200px",
      cursor: "text",
    },
  },
});

export default SearchBar;
