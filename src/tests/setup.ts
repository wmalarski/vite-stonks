import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("@vanilla-extract/css", () => {
  return {
    style: (): string => "class",
    globalStyle: () => void 0,
    createTheme: <T>(theme: T) => ["class", theme],
  };
});
