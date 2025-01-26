import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Tiers from "./pages/Tiers";
import { ModalProvider } from "./context/modalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import Overall from "./pages/Overall";
import { SelectedModeProvider } from "./context/selectedModeContext";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import GamemodeHeader from "./components/GamemodeHeader";
import Header from "./components/Header";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SelectedModeProvider>
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Header />}>
                <Route path="tiers" element={<GamemodeHeader />}>
                  <Route path="overall" element={<Overall />} />
                  <Route path=":mode" element={<Tiers />} />
                </Route>
                <Route path="admin">
                  <Route path="login" element={<AdminLogin />} />
                  <Route path="dashboard" element={<AdminDashboard />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ModalProvider>
      </SelectedModeProvider>
    </QueryClientProvider>
  </StrictMode>
);
