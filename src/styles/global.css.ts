import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("*, *::before, *::after", {
  boxSizing: "inherit",
});
