import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
import { useQuery } from "@tanstack/react-query";
import { fetchSubhumanData } from "../api/API";
import PlayerContainer from "../components/subhuman/PlayerContainer";
import { BeatLoader } from "react-spinners";

const Subhuman = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchSubhumanData(),
    queryKey: ["subhuman"],
    staleTime: 300_000,
    gcTime: 300_000,
  });

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.title)}>Subhuman Players List</div>
      {isLoading ? (
        <div {...stylex.props(styles.loaderWrapper)}>
          <BeatLoader color={colors.loader} />
        </div>
      ) : (
        <div>
          {data.map((pl) => (
            <PlayerContainer
              ign={pl.ign}
              country={pl.country}
              reason={pl.reason}
              key={pl.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    color: colors.textColor,
    backgroundColor: colors.backgroundColor,
    margin: "auto",
  },
  title: {
    textAlign: "center",
    fontSize: "36px",
    fontFamily: "Russo One",
    marginVertical: "16px",
  },
  loaderWrapper: {
    height: "20vh",
    width: "100vw",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Subhuman;
