import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { QueryFunction } from "react-query";
import { SheetId } from "./SheetApi";
import { supabase } from "./supabase";

type ReportId = number;

export type Report = {
  accidentPremium: number;
  base: number;
  date: moment.Moment;
  disabilityPension: number;
  expenses: number;
  healthContributions: number;
  id: ReportId;
  income: number;
  pensionContribution: number;
  pensionsSummary: number;
  proceeds: number;
  sheet_id: SheetId;
  sicknessContribution: number;
  socialSecurity: number;
  tax: number;
};

export type CreateReportArgs = Pick<
  Report,
  | "accidentPremium"
  | "date"
  | "disabilityPension"
  | "pensionContribution"
  | "sheet_id"
  | "sicknessContribution"
>;

export type ReportPageArgs = {
  limit: number;
  offset: number;
};

type ReportListResult = {
  reports: Report[];
  count: number;
};

type ReportsKey = ["reports", SheetId] | ["reports", SheetId, ReportPageArgs];

export type ReportApiService = {
  create: (args: CreateReportArgs) => Promise<Report>;
  delete: (args: ReportId) => Promise<void>;
  list: QueryFunction<ReportListResult, ReportsKey>;
  listKey: (id: ReportId, page?: ReportPageArgs) => ReportsKey;
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

const table = "reports";
const view = "reports_view";

type Props = {
  children: ReactNode;
};

export const ReportApiProvider = ({ children }: Props): ReactElement => {
  const value = useMemo<ReportApiContextValue>(() => {
    return {
      isInitialized: true,
      api: {
        create: async (args) => {
          const { error, data } = await supabase
            .from<Report>(table)
            .insert(args)
            .single();
          if (error) throw error;
          return data;
        },
        delete: async (id) => {
          const { error } = await supabase
            .from<Report>(table)
            .delete()
            .eq("id", id);
          if (error) throw error;
        },
        list: async ({ queryKey }) => {
          const args = queryKey[2] ?? { limit: 50, offset: 0 };
          const { data, error, count } = await supabase
            .from<Report>(view)
            .select("*", { count: "estimated" })
            .eq("sheet_id", queryKey[1])
            .range(args.offset, args.offset + args.limit);
          if (error) throw error;
          return { reports: data, count: count ?? 0 };
        },
        listKey: (id, page) => {
          return page ? ["reports", id, page] : ["reports", id];
        },
      },
    };
  }, []);

  return (
    <ReportApiContext.Provider value={value}>
      {children}
    </ReportApiContext.Provider>
  );
};
