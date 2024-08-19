import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./components/theme";
import "./index.css";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { DynamicContainer } from "./components/StyledComponent/StyledComponents";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline>
          <DynamicContainer
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100vw",
            }}
          >
            <Container maxWidth="xl">
              <Button onClick={handleToggleTheme}>
                Toggle {isDarkMode ? "Light" : "Dark"} Mode
              </Button>
              <MainContent></MainContent>
            </Container>
          </DynamicContainer>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
