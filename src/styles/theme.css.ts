import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    background: "#ffffff",
    gray: "#f0f1f2",
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  border: {
    xs: "solid 1px #f0f1f2",
  },
});
