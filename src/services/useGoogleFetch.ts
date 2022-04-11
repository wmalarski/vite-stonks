import { useCallback } from "react";
import { supabase } from "./supabase";

type GoogleFetch = (
  info: RequestInfo,
  init?: RequestInit,
  search?: Record<string, string>
) => Promise<Response>;

export const useGoogleFetch = (): GoogleFetch => {
  const session = supabase.auth.session();
  const tokenType = session?.token_type;
  const accessToken = session?.access_token;

  return useCallback(
    (info, init, search) => {
      const params = new URLSearchParams({
        key: import.meta.env.VITE_GOOGLE_API_KEY as string,
        ...search,
      });

      if (!accessToken) return fetch(info, init);

      return fetch(`${info}?${params}`, {
        ...init,
        headers: {
          ...init?.headers,
          "Content-Type": "application/json",
          Authorization: `${tokenType} ${accessToken}`,
        },
      });
    },
    [accessToken, tokenType]
  );
};
