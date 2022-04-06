import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  backgroundColor: vars.color.gray,
  height: "100vh",
  width: "100vw",
  overflow: "clip",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const box = style({
  backgroundColor: vars.color.background,
  display: "flex",
  flexDirection: "column",
  padding: vars.space.lg,
});
