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
const invoicesSheet = "Rachunki";

export type Invoice = {
  address: string;
  company: string;
  date: string;
  hours: number;
  id: string;
  name: string;
  nip: string;
  price: number;
  summary: number;
  title: string;
};

type Sheet = {
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

type SpreadSheetKey = ["spreadSheet", string];

export type SpreadSheetApiService = {
  list: QueryFunction<Invoice[], SpreadSheetKey>;
  keyList: (id: string) => SpreadSheetKey;
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

const getInvoicesRanges = (sheets: Sheet[]): string => {
  const invoices = sheets.find(
    (sheet) => sheet.properties.title === invoicesSheet
  );
  const rowCount = invoices?.properties.gridProperties.columnCount ?? 0;

  const range = `${invoicesSheet}!A1:K${rowCount + 1}`;

  return range;
};

const getInvoices = (sheets: Sheet[]): Invoice[] => {
  return sheets
    .flatMap((sheet) => sheet.data)
    .flatMap((data) => data.rowData.slice(2))
    .flatMap((rowData) => {
      const id = rowData.values[0].formattedValue;
      const date = rowData.values[1].formattedValue;
      const name = rowData.values[2].formattedValue;
      const company = rowData.values[3].formattedValue;
      const address = rowData.values[4].formattedValue;
      const nip = rowData.values[5].formattedValue;
      const title = rowData.values[6].formattedValue;
      const hours = rowData.values[7].formattedValue;
      const price = rowData.values[8].formattedValue;
      const summary = rowData.values[9].formattedValue;
      if (
        !address ||
        !company ||
        !date ||
        !hours ||
        !id ||
        !name ||
        !nip ||
        !price ||
        !summary ||
        !title
      )
        return [];
      return [
        {
          address,
          company,
          date,
          hours: parseInt(hours),
          id,
          name,
          nip,
          price: parseInt(price),
          summary: parseInt(summary),
          title,
        },
      ];
    });
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
        list: async ({ queryKey }) => {
          const url = `${endpoint}/${queryKey[1]}`;
          const propertiesResponse = await googleFetch(url, { method: "GET" });
          const properties = await propertiesResponse.json();

          const invoicesResponse = await googleFetch(
            url,
            { method: "GET" },
            {
              ranges: getInvoicesRanges(properties.sheets),
              includeGridData: "true",
              fields: "sheets.data.rowData.values.formattedValue",
            }
          );
          const rawInvoices = await invoicesResponse.json();
          const invoices = getInvoices(rawInvoices.sheets);

          return invoices;
        },
        keyList: (id) => {
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
