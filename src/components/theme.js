import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: "IBM Plex Sans Arabic, sans-serif",
    fontWeight: 400,
    lineHeight: 1.5,
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#242424",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
    },
  },
  typography: {
    fontFamily: "IBM Plex Sans Arabic, sans-serif",
    fontWeight: 400,
    lineHeight: 1.5,
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
});

export { lightTheme, darkTheme };
