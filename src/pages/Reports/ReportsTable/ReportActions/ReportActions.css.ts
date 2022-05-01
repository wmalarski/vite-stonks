import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const list = style({
  display: "flex",
  gap: vars.space.xs,
  flexWrap: "nowrap",
});
