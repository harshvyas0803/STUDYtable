import React from "react";
import ThemeProvider from "./context/ThemeContext";
import Home from "./Home";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;

