import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const bottom = style({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "flex-end",
  padding: vars.space.md,
});
