import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Tiers from "./pages/Tiers";
import { ModalProvider } from "./context/modalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import Overall from "./pages/Overall";
import { SelectedModeProvider } from "./context/selectedModeContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SelectedModeProvider>
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/tiers/overall" element={<Overall />} />
              <Route path="/tiers/:mode" element={<Tiers />} />
            </Routes>
          </BrowserRouter>
        </ModalProvider>
      </SelectedModeProvider>
    </QueryClientProvider>
  </StrictMode>
);
