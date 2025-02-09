import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Tiers from "./pages/Tiers";
import { ModalProvider } from "./context/modalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { SelectedModeProvider } from "./context/selectedModeContext";
import { SearchProvider } from "./context/searchContext";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Header from "./components/layout/Header";
import Leaderboard from "./pages/Leaderboard";
import Subhuman from "./pages/Subhuman";
import OverallLb from "./components/leaderboard/Top10LB";
import GamemodeLeaderboard from "./components/leaderboard/GamemodeLeaderboard";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SelectedModeProvider>
          <SearchProvider>
            <ModalProvider>
              <Routes>
                <Route element={<Header />}>
                  <Route
                    path="*"
                    index
                    element={<Navigate to="/leaderboard/overall" />}
                  />
                  <Route path="leaderboard" element={<Leaderboard />}>
                    <Route index element={<Navigate to="/" />} />
                    <Route path="overall" element={<OverallLb />} />
                    <Route
                      path="pak_lb"
                      element={
                        <GamemodeLeaderboard
                          country="pak"
                          players={[
                            { ign: "FakeDrugLord123", rank: "HT3" },
                            { ign: "YTMe_", rank: "LT3" },
                            { ign: "asimyuh_FAN", rank: "LT3" },
                            { ign: "xUltimate_", rank: "LT3" },
                            { ign: "Raxizz", rank: "LT3" },
                            { ign: "Sqxshyy", rank: "LT3" },
                            { ign: "FllNISH", rank: "LT3" },
                            { ign: "xeob", rank: "LT3" },
                            { ign: "StackeRrz", rank: "LT3" },
                            { ign: "DrPuuuu", rank: "LT3" },
                          ]}
                        />
                      }
                    />
                    <Route
                      path="ind_lb"
                      element={
                        <GamemodeLeaderboard
                          country="ind"
                          players={[
                            { ign: "360Mall", rank: "HT3" },
                            { ign: "9fts", rank: "LT3" },
                            { ign: "mistyibra", rank: "LT3" },
                            { ign: "CattoL0VeR", rank: "LT3" },
                            { ign: "Critspammer449", rank: "LT3" },
                            { ign: "Critspammer449", rank: "LT3" },
                            { ign: "ShubDaRizzler_", rank: "LT3" },
                            { ign: "RunThe1s_", rank: "LT3" },
                            { ign: "TimeIess_", rank: "LT3" },
                            { ign: "OhioKidooo", rank: "LT3" },
                            { ign: "Sahibiguess", rank: "LT3" },
                          ]}
                        />
                      }
                    />
                  </Route>
                  <Route path="tiers">
                    <Route index element={<Navigate to="/" />} />
                    <Route path=":mode" element={<Tiers />} />
                  </Route>
                  <Route path="subhuman" element={<Subhuman />} />
                </Route>
                <Route path="admin">
                  <Route path="login" element={<AdminLogin />} />
                  <Route path="dashboard" element={<AdminDashboard />} />
                </Route>
              </Routes>
            </ModalProvider>
          </SearchProvider>
        </SelectedModeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
