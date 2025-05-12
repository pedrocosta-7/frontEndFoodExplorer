import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./hooks/auth.jsx";
import { CartProvider } from "./contexts/CartContext"; // Importe o CartProvider

import { MenuAdmin } from "./pages/MenuAdmin";
import { Menu } from "./pages/Menu";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { MyRoutes } from "./routes/index.jsx";

console.log("O main.jsx está sendo executado");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <CartProvider> {/* Envolva os componentes com CartProvider */}
          <MyRoutes />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);


/*
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./hooks/auth.jsx";

import { MenuAdmin } from "./pages/MenuAdmin";
import { Menu } from "./pages/Menu";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { MyRoutes } from "./routes/index.jsx";

console.log("O main.jsx está sendo executado");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <MyRoutes />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
*/