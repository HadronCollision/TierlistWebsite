import { StrictMode, useState } from "react";
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
      <SelectedModeProvider>
        <SearchProvider>
          <ModalProvider>
            <BrowserRouter>
              <Font family="Roboto">
                <Routes>
                  <Route
                    index
                    element={<Navigate replace to="/ranking/overall" />}
                  />
                  <Route element={<Header />}>
                    <Route path="tiers">
                      <Route path=":mode" element={<Tiers />} />
                    </Route>
                    <Route path="ranking">
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
            </BrowserRouter>
          </ModalProvider>
        </SearchProvider>
      </SelectedModeProvider>
    </QueryClientProvider>
  </StrictMode>
);
