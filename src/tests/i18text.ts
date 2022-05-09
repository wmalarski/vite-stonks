import i18n from "@/utils/i18next";
import { TOptions } from "i18next";

export const i18text = (key: string, options?: TOptions) => {
  return i18n.t<string>(key, { ns: "common", ...options });
};
