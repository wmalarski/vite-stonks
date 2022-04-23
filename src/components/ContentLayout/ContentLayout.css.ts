import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const side = style({
  backgroundColor: vars.color.background,
});

export const content = style({
  margin: vars.space.md,
  maxHeight: "calc(100vh - 64px)",
  backgroundColor: vars.color.background,
});
