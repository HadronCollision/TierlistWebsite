import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Tiers from "./pages/Tiers";
import { ModalProvider } from "./context/modalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { SelectedModeProvider } from "./context/selectedModeContext";
import { SearchProvider } from "./context/searchContext";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Header from "./components/Header";
import Overall from "./pages/Overall";
import Subhuman from "./pages/Subhuman";
import Font from "react-font";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SelectedModeProvider>
          <SearchProvider>
            <ModalProvider>
              <Font family="Roboto">
                <Routes>
                  <Route element={<Header />}>
                    <Route
                      path="*"
                      index
                      element={<Navigate to="/ranking/overall" />}
                    />
                    <Route path="tiers">
                      <Route index element={<Navigate to="/" />} />
                      <Route path=":mode" element={<Tiers />} />
                    </Route>
                    <Route path="ranking">
                      <Route index element={<Navigate to="/" />} />
                      <Route path="overall" element={<Overall />} />
                      <Route path="topten" element={<Overall />} />
                      <Route path="subhuman" element={<Subhuman />} />
                    </Route>
                    <Route path="admin">
                      <Route path="login" element={<AdminLogin />} />
                      <Route path="dashboard" element={<AdminDashboard />} />
                    </Route>
                  </Route>
                </Routes>
              </Font>
            </ModalProvider>
          </SearchProvider>
        </SelectedModeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
