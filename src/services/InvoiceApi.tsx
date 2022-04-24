import { parseDate } from "@/utils/format";
import moment from "moment";
import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { QueryFunction } from "react-query";
import {
  googleEndpoint,
  SpreadSheetData,
  useGoogleFetch,
} from "./useGoogleFetch";

export type Invoice = {
  address1: string;
  address2: string;
  company: string;
  date: moment.Moment;
  hours: number;
  name: string;
  nip: string;
  price: number;
  summary: number;
  title: string;
};

type CreateInvoiceArgs = {
  id: string;
  create: Invoice;
};

type DeleteInvoiceArgs = {
  id: string;
  index: number;
};

type UpdateInvoiceArgs = {
  id: string;
  index: number;
  update: Invoice;
};

type InvoicesKey = ["invoices", string];
type InvoiceKey = ["invoice", string, number];

export type InvoiceApiService = {
  create: (args: CreateInvoiceArgs) => Promise<number>;
  delete: (args: DeleteInvoiceArgs) => Promise<void>;
  get: QueryFunction<Invoice, InvoiceKey>;
  key: (id: string, index: number) => InvoiceKey;
  list: QueryFunction<Invoice[], InvoicesKey>;
  listKey: (id: string) => InvoicesKey;
  update: (args: UpdateInvoiceArgs) => Promise<number>;
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

const invoicesSpreadSheetName = "Rachunki";

const getInvoiceRange = (row: number): string => {
  return `${invoicesSpreadSheetName}!A${row + 3}:L${row + 3}`;
};

const getInvoicesRanges = (sheets: SpreadSheetData[]): string => {
  const invoices = sheets.find(
    (sheet) => sheet.properties.title === invoicesSpreadSheetName
  );
  const rowCount = invoices?.properties.gridProperties.columnCount ?? 0;

  return `${invoicesSpreadSheetName}!A1:L${rowCount + 1}`;
};

const getInvoices = (sheets: SpreadSheetData[], drop: number): Invoice[] => {
  return sheets
    .flatMap((sheet) => sheet.data)
    .flatMap((data) => data.rowData.slice(drop))
    .flatMap((rowData) => {
      const id = rowData.values[0].formattedValue;
      const date = rowData.values[1].formattedValue;
      const name = rowData.values[2].formattedValue;
      const company = rowData.values[3].formattedValue;
      const address1 = rowData.values[4].formattedValue;
      const address2 = rowData.values[5].formattedValue;
      const nip = rowData.values[6].formattedValue;
      const title = rowData.values[7].formattedValue;
      const hours = rowData.values[8].formattedValue;
      const price = rowData.values[9].formattedValue;
      const summary = rowData.values[10].formattedValue;

      if (
        !address1 ||
        !address2 ||
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
          address1,
          address2,
          company,
          date: parseDate(date),
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

export const InvoiceApiProvider = ({ children }: Props): ReactElement => {
  const googleFetch = useGoogleFetch();

  const value = useMemo<InvoiceApiContextValue>(() => {
    return {
      isInitialized: true,
      api: {
        create: async () => {
          return Promise.resolve(0);
        },
        delete: async () => {
          return Promise.resolve();
        },
        get: async ({ queryKey }) => {
          const url = `${googleEndpoint}/${queryKey[1]}`;
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
          const url = `${googleEndpoint}/${queryKey[1]}`;
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
        listKey: (id) => {
          return ["invoices", id];
        },
        update: () => {
          return Promise.resolve(0);
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
