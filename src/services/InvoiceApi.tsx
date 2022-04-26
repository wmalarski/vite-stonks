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
  SpreadSheetValue,
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
const invoiceInsertRange = `${invoicesSpreadSheetName}!A:K`;

const getInvoiceRange = (index: number): string => {
  return `${invoicesSpreadSheetName}!A${index + 3}:K${index + 3}`;
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
    .map(({ values }) =>
      values.flatMap(({ formattedValue: value }) => (value ? [value] : []))
    )
    .filter((values) => values.length === 10)
    .map((values) => ({
      date: parseDate(values[0]),
      name: values[1],
      company: values[2],
      address1: values[3],
      address2: values[4],
      nip: values[5],
      title: values[6],
      hours: parseInt(values[7]),
      price: parseInt(values[8]),
      summary: parseInt(values[9]),
    }));
};

const getValues = (invoice: Invoice): SpreadSheetValue[] => {
  return [
    { formattedValue: invoice.date.toISOString() },
    { formattedValue: invoice.name },
    { formattedValue: invoice.company },
    { formattedValue: invoice.address1 },
    { formattedValue: invoice.address2 },
    { formattedValue: invoice.nip },
    { formattedValue: invoice.title },
    { formattedValue: String(invoice.hours) },
    { formattedValue: String(invoice.price) },
    { formattedValue: String(invoice.summary) },
  ];
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
        create: async ({ create, id }) => {
          const url = `${googleEndpoint}/${id}:batchUpdate`;
          const invoicesResponse = await googleFetch(
            url,
            {
              method: "POST",
              body: JSON.stringify({
                requests: [
                  {
                    sheetId: 0,
                    rows: [{ values: getValues(create) }],
                    fields: "*",
                  },
                ],
                range: invoiceInsertRange,
                values: getValues(create),
              }),
            },
            {
              insertDataOption: "INSERT_ROWS",
            }
          );

          console.log({ invoicesResponse });

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
