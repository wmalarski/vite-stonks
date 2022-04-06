import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  backgroundColor: vars.color.background,
  height: "100%",
});

export const logo = style({
  padding: `0 ${vars.space.xl}`,
});

export const title = style({
  margin: vars.space.xs,
});
