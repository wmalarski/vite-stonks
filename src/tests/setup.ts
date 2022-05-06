import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("@vanilla-extract/css", () => {
  return {
    style: (): string => "class",
    globalStyle: () => void 0,
    createTheme: <T>(theme: T) => ["class", theme],
  };
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
