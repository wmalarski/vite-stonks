import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const page = style({
  backgroundColor: vars.color.background,
});

export const content = style({
  overflowY: "scroll",
  overflowX: "clip",
  maxHeight: "calc(100vh - 168px)",
});
