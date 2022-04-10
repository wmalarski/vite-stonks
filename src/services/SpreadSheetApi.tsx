import { useAccessToken } from "@nhost/react";
import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { QueryFunction } from "react-query";

const endpoint = "https://sheets.googleapis.com/v4/spreadsheets";

export type SpreadSheet = {
  id: string;
};

type SpreadSheetKey = ["spreadSheet", string];

export type SpreadSheetApiService = {
  get: QueryFunction<SpreadSheet, SpreadSheetKey>;
  key: (id: string) => SpreadSheetKey;
};

type SheetApiContextValue =
  | {
      isInitialized: false;
    }
  | {
      isInitialized: true;
      api: SpreadSheetApiService;
    };

const SpreadSheetApiContext = createContext<SheetApiContextValue>({
  isInitialized: false,
});

export const useSpreadSheetApi = (): SpreadSheetApiService => {
  const context = useContext(SpreadSheetApiContext);

  if (!context.isInitialized) {
    throw new Error("Spread Sheet Api context not defined");
  }

  return context.api;
};

type Props = {
  children: ReactNode;
};

export const SpreadSheetApiProvider = ({ children }: Props): ReactElement => {
  const accessToken = useAccessToken();

  const value = useMemo<SheetApiContextValue | null>(() => {
    if (!accessToken) return null;

    return {
      isInitialized: true,
      api: {
        get: async ({ queryKey }) => {
          const url = `${endpoint}/${queryKey[1]}`;
          const result = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          return await result.json();
        },
        key: (id) => {
          return ["spreadSheet", id];
        },
      },
    };
  }, [accessToken]);

  if (!value) return <>{children}</>;

  return (
    <SpreadSheetApiContext.Provider value={value}>
      {children}
    </SpreadSheetApiContext.Provider>
  );
};
