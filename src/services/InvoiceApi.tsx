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
const invoicesSpreadSheetName = "Rachunki";

export type Invoice = {
  address: string;
  company: string;
  date: string;
  hours: number;
  id: string;
  index: number;
  name: string;
  nip: string;
  price: number;
  summary: number;
  title: string;
};

type SpreadSheetData = {
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

type InvoicesKey = ["invoices", string];
type InvoiceKey = ["invoice", string, number];

export type InvoiceApiService = {
  get: QueryFunction<Invoice, InvoiceKey>;
  key: (id: string, row: number) => InvoiceKey;
  list: QueryFunction<Invoice[], InvoicesKey>;
  keyList: (id: string) => InvoicesKey;
};

type InvoiceApiContextValue =
  | {
      isInitialized: false;
    }
  | {
      isInitialized: true;
      api: InvoiceApiService;
    };

export const InvoiceApiContext = createContext<InvoiceApiContextValue>({
  isInitialized: false,
});

export const useInvoiceApi = (): InvoiceApiService => {
  const context = useContext(InvoiceApiContext);

  if (!context.isInitialized) {
    throw new Error("Invoice Api context not defined");
  }

  return context.api;
};

const getInvoiceRange = (row: number): string => {
  return `${invoicesSpreadSheetName}!A${row + 3}:K${row + 3}`;
};

const getInvoicesRanges = (sheets: SpreadSheetData[]): string => {
  const invoices = sheets.find(
    (sheet) => sheet.properties.title === invoicesSpreadSheetName
  );
  const rowCount = invoices?.properties.gridProperties.columnCount ?? 0;

  return `${invoicesSpreadSheetName}!A1:K${rowCount + 1}`;
};

const getInvoices = (sheets: SpreadSheetData[], drop: number): Invoice[] => {
  return sheets
    .flatMap((sheet) => sheet.data)
    .flatMap((data) => data.rowData.slice(drop))
    .flatMap((rowData, index) => {
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
          index,
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

export const InvoiceApiProvider = ({ children }: Props): ReactElement => {
  const googleFetch = useGoogleFetch();

  const value = useMemo<InvoiceApiContextValue>(() => {
    return {
      isInitialized: true,
      api: {
        get: async ({ queryKey }) => {
          const url = `${endpoint}/${queryKey[1]}`;
          const invoicesResponse = await googleFetch(
            url,
            { method: "GET" },
            {
              ranges: getInvoiceRange(queryKey[2]),
              includeGridData: "true",
              fields: "sheets.data.rowData.values.formattedValue",
            }
          );
          const rawInvoices = await invoicesResponse.json();
          const invoices = getInvoices(rawInvoices.sheets, 0);

          if (invoices.length < 1) throw new Error("Not invoice with index");

          return invoices[0];
        },
        key: (id, row) => {
          return ["invoice", id, row];
        },
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
          const invoices = getInvoices(rawInvoices.sheets, 2);

          return invoices;
        },
        keyList: (id) => {
          return ["invoices", id];
        },
      },
    };
  }, [googleFetch]);

  if (!value) return <>{children}</>;

  return (
    <InvoiceApiContext.Provider value={value}>
      {children}
    </InvoiceApiContext.Provider>
  );
};
