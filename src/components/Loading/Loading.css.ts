import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
  width: "100%",
  overflow: "clip",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const variant = styleVariants({
  default: [base, { height: "100%" }],
  viewport: [base, { height: "100vh" }],
});
