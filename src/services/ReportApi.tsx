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

export type CreateReportData = Pick<
  Report,
  | "date"
  | "pensionContribution"
  | "disabilityPension"
  | "sicknessContribution"
  | "accidentPremium"
>;

export type CreateReportArgs = {
  id: string;
  data: CreateReportData;
};

type ReportsKey = ["reports", string];

export type ReportApiService = {
  create: (args: CreateReportArgs) => Promise<number>;
  delete: (args: DeleteInvoiceArgs) => Promise<void>;
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

const reportSpreadSheetName = "Zestawienie";

const getReportRanges = (sheets: SpreadSheetData[]): string => {
  const reports = sheets.find(
    (sheet) => sheet.properties.title === reportSpreadSheetName
  );
  const rowCount = reports?.properties.gridProperties.columnCount ?? 0;

  return `${reportSpreadSheetName}!A1:M${rowCount + 1}`;
};

const getReports = (sheets: SpreadSheetData[], drop: number): Report[] => {
  return sheets
    .flatMap((sheet) => sheet.data)
    .flatMap((data) => data.rowData.slice(drop))
    .map(({ values }) =>
      values.flatMap(({ formattedValue: value }) => (value ? [value] : []))
    )
    .filter((values) => values.length === 13)
    .map((values) => {
      console.log({ values });
      return {
        date: parseDate(values[0]),
        income: Number(values[1]),
        expenses: Number(values[2]),
        proceeds: Number(values[3]),
        pensionContribution: Number(values[4]),
        disabilityPension: Number(values[5]),
        sicknessContribution: Number(values[6]),
        accidentPremium: Number(values[7]),
        pensionsSummary: Number(values[8]),
        base: Number(values[9]),
        tax: Number(values[10]),
        healthContributions: Number(values[11]),
        socialSecurity: Number(values[12]),
      };
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
        create: async () => {
          return Promise.resolve(0);
        },
        delete: async () => {
          await Promise.resolve();
        },
        list: async ({ queryKey }) => {
          const url = `${googleEndpoint}/${queryKey[1]}`;
          const propertiesResponse = await googleFetch(url, { method: "GET" });
          const properties = await propertiesResponse.json();
          console.log({ properties });
          const reportsResponse = await googleFetch(
            url,
            { method: "GET" },
            {
              ranges: getReportRanges(properties.sheets),
              includeGridData: "true",
              fields: "sheets.data.rowData.values.formattedValue",
            }
          );
          const rawInvoices = await reportsResponse.json();
          console.log({ rawInvoices });
          const reports = getReports(rawInvoices.sheets, 4);
          console.log({ reports });
          return reports;
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
