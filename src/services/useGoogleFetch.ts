import { useCallback } from "react";
import { supabase } from "./supabase";

type GoogleFetch = (
  info: RequestInfo,
  init?: RequestInit,
  search?: Record<string, string>
) => Promise<Response>;

export type SpreadSheetData = {
  data: {
    rowData: {
      values: {
        formattedValue?: string;
      }[];
    }[];
  }[];
  properties: {
    gridProperties: {
      columnCount: number;
    };
    title: string;
  };
};

export const googleEndpoint = "https://sheets.googleapis.com/v4/spreadsheets";

export const useGoogleFetch = (): GoogleFetch => {
  const session = supabase.auth.session();
  const tokenType = session?.token_type;
  const accessToken = session?.access_token;

  return useCallback(
    (info, init, search) => {
      if (!accessToken) return fetch(info, init);

      const authorization = `${tokenType} ${accessToken}`;
      const params = new URLSearchParams({
        key: import.meta.env.VITE_GOOGLE_API_KEY as string,
        // access_token: accessToken,
        ...search,
      });

      const url = `${info}?${params}`;

      return fetch(url, {
        ...init,
        headers: {
          ...init?.headers,
          "Content-Type": "application/json",
          Authorization: authorization,
        },
      });
    },
    [accessToken, tokenType]
  );
};
