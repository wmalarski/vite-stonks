import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { QueryFunction } from "react-query";
import { useGoogleFetch } from "./useGoogleFetch";

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

export const SpreadSheetApiContext = createContext<SheetApiContextValue>({
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
  const googleFetch = useGoogleFetch();

  const value = useMemo<SheetApiContextValue | null>(() => {
    return {
      isInitialized: true,
      api: {
        get: async ({ queryKey }) => {
          const url = `${endpoint}/${queryKey[1]}`;
          const result = await googleFetch(url, { method: "GET" });
          return await result.json();
        },
        key: (id) => {
          return ["spreadSheet", id];
        },
      },
    };
  }, [googleFetch]);

  if (!value) return <>{children}</>;

  return (
    <SpreadSheetApiContext.Provider value={value}>
      {children}
    </SpreadSheetApiContext.Provider>
  );
};
