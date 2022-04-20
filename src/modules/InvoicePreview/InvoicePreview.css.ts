import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const layout = style({
  backgroundColor: vars.color.background,
  height: "100%",
  width: "100%",
  padding: vars.space.lg,
});
