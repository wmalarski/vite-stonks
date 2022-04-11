import { useAccessToken } from "@nhost/react";
import { useCallback } from "react";

type GoogleFetch = (info: RequestInfo, init?: RequestInit) => Promise<Response>;

export const useGoogleFetch = (): GoogleFetch => {
  const accessToken = useAccessToken();

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
