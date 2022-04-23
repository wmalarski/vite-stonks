import { parseDate } from "@/utils/format";
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

type ReportId = number;

export type Report = {
  index: ReportId;
  date: moment.Moment;
  income: number;
  expenses: number;
  proceeds: number;
  pensionContribution: number;
  disabilityPension: number;
  sicknessContribution: number;
  accidentPremium: number;
  pensionsSummary: number;
  base: number;
  tax: number;
  healthContributions: number;
  socialSecurity: number;
};

type DeleteInvoiceArgs = {
  id: string;
  index: ReportId;
};

export type CreateReportArgs = {
  date: moment.Moment;
};

type ReportsKey = ["reports", string];
type ReportKey = ["report", string, ReportId];

export type ReportApiService = {
  create: (args: CreateReportArgs) => Promise<Report>;
  delete: (args: DeleteInvoiceArgs) => Promise<void>;
  get: QueryFunction<Report, ReportKey>;
  key: (id: string, index: ReportId) => ReportKey;
  list: QueryFunction<Report[], ReportsKey>;
  listKey: (id: string) => ReportsKey;
};

type ReportApiContextValue =
  | {
      isInitialized: false;
    }
  | {
      isInitialized: true;
      api: ReportApiService;
    };

export const ReportApiContext = createContext<ReportApiContextValue>({
  isInitialized: false,
});

export const useReportApi = (): ReportApiService => {
  const context = useContext(ReportApiContext);

  if (!context.isInitialized) {
    throw new Error("Report Api context not defined");
  }

  return context.api;
};

const reportSpreadSheetName = "Zestawienia";

const getReportRange = (row: number): string => {
  return `${reportSpreadSheetName}!A${row + 5}:N${row + 5}`;
};

const getReportRanges = (sheets: SpreadSheetData[]): string => {
  const invoices = sheets.find(
    (sheet) => sheet.properties.title === reportSpreadSheetName
  );
  const rowCount = invoices?.properties.gridProperties.columnCount ?? 0;

  return `${reportSpreadSheetName}!A1:L${rowCount + 1}`;
};

const getReports = (sheets: SpreadSheetData[], drop: number): Report[] => {
  return sheets
    .flatMap((sheet) => sheet.data)
    .flatMap((data) => data.rowData.slice(drop))
    .flatMap((rowData, index) => {
      const date = rowData.values[0].formattedValue;
      const income = rowData.values[1].formattedValue;
      const expenses = rowData.values[2].formattedValue;
      const proceeds = rowData.values[3].formattedValue;
      const pensionContribution = rowData.values[4].formattedValue;
      const disabilityPension = rowData.values[5].formattedValue;
      const sicknessContribution = rowData.values[6].formattedValue;
      const accidentPremium = rowData.values[7].formattedValue;
      const pensionsSummary = rowData.values[8].formattedValue;
      const base = rowData.values[9].formattedValue;
      const tax = rowData.values[10].formattedValue;
      const healthContributions = rowData.values[11].formattedValue;
      const socialSecurity = rowData.values[12].formattedValue;

      if (
        !date ||
        !income ||
        !expenses ||
        !proceeds ||
        !pensionContribution ||
        !disabilityPension ||
        !sicknessContribution ||
        !accidentPremium ||
        !pensionsSummary ||
        !base ||
        !tax ||
        !healthContributions ||
        !socialSecurity
      )
        return [];

      return [
        {
          index,
          date: parseDate(date),
          income: parseFloat(income),
          expenses: parseFloat(income),
          proceeds: parseFloat(income),
          pensionContribution: parseFloat(income),
          disabilityPension: parseFloat(income),
          sicknessContribution: parseFloat(income),
          accidentPremium: parseFloat(income),
          pensionsSummary: parseFloat(income),
          base: parseFloat(income),
          tax: parseFloat(income),
          healthContributions: parseFloat(income),
          socialSecurity: parseFloat(income),
        },
      ];
    });
};

type Props = {
  children: ReactNode;
};

export const ReportApiProvider = ({ children }: Props): ReactElement => {
  const googleFetch = useGoogleFetch();

  const value = useMemo<ReportApiContextValue>(() => {
    return {
      isInitialized: true,
      api: {
        create: async (args) => {
          return Promise.resolve({
            ...args,
            accidentPremium: 0,
            base: 0,
            disabilityPension: 0,
            expenses: 0,
            healthContributions: 0,
            income: 0,
            index: 0,
            pensionContribution: 0,
            pensionsSummary: 0,
            proceeds: 0,
            sicknessContribution: 0,
            socialSecurity: 0,
            tax: 0,
          });
        },
        delete: async () => {
          await Promise.resolve();
        },
        get: async ({ queryKey }) => {
          const url = `${googleEndpoint}/${queryKey[1]}`;
          const reportResponse = await googleFetch(
            url,
            { method: "GET" },
            {
              ranges: getReportRange(queryKey[2]),
              includeGridData: "true",
              fields: "sheets.data.rowData.values.formattedValue",
            }
          );
          const rawReport = await reportResponse.json();
          const invoices = getReports(rawReport.sheets, 0);

          if (invoices.length < 1) throw new Error("Not invoice with index");

          return invoices[0];
        },
        key: (id, index) => {
          return ["report", id, index];
        },
        list: async ({ queryKey }) => {
          const url = `${googleEndpoint}/${queryKey[1]}`;
          const propertiesResponse = await googleFetch(url, { method: "GET" });
          const properties = await propertiesResponse.json();

          const invoicesResponse = await googleFetch(
            url,
            { method: "GET" },
            {
              ranges: getReportRanges(properties.sheets),
              includeGridData: "true",
              fields: "sheets.data.rowData.values.formattedValue",
            }
          );
          const rawInvoices = await invoicesResponse.json();
          const invoices = getReports(rawInvoices.sheets, 2);

          return invoices;
        },
        listKey: (id) => {
          return ["reports", id];
        },
      },
    };
  }, [googleFetch]);

  return (
    <ReportApiContext.Provider value={value}>
      {children}
    </ReportApiContext.Provider>
  );
};
