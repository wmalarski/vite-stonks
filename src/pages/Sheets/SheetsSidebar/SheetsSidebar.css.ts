import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  backgroundColor: vars.color.background,
  display: "flex",
  flexDirection: "column",
  height: "100%",
});
