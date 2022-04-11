import { useCallback } from "react";
import { supabase } from "./supabase";

type GoogleFetch = (info: RequestInfo, init?: RequestInit) => Promise<Response>;

export const useGoogleFetch = (): GoogleFetch => {
  const session = supabase.auth.session();
  const accessToken = session?.access_token;

  return useCallback(
    (info, init) => {
      if (!accessToken) return fetch(info, init);
      return fetch(info, {
        ...init,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...init?.headers,
        },
      });
    },
    [accessToken]
  );
};
