import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./styles";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <RouterProvider router={router} />
        <CssBaseline />
      </Container>
    </ThemeProvider>
  </React.StrictMode>,
);
