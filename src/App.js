import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage/>
    </ThemeProvider>
  );
};

export default App;
