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
import OverallLb from "./components/leaderboard/OverallLb";
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
                      path="paklb"
                      element={<GamemodeLeaderboard country="pak" />}
                    />
                    <Route
                      path="indlb"
                      element={<GamemodeLeaderboard country="ind" />}
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
