import "@testing-library/jest-dom";
import { vi } from "vitest";
import { server } from "./server.js";

vi.mock("@vanilla-extract/css", () => {
  return {
    style: (): string => "class",
    globalStyle: () => void 0,
    createTheme: <T>(theme: T) => ["class", theme],
    styleVariants: <T>(variants: T) =>
      Object.fromEntries(Object.keys(variants).map((key) => [key, "class"])),
  };
});

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

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
