import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const layout = style({
  backgroundColor: vars.color.background,
  height: "100vh",
  overflow: "clip",
});

export const header = style({
  borderBottom: vars.border.xs,
  padding: 0,
});

export const side = style({
  backgroundColor: vars.color.background,
});
