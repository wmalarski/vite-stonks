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
import { PageArgs } from "./types";

type ReportId = number;

export type Report = {
  accident_premium: number;
  date: string;
  disability_pension: number;
  id: ReportId;
  pension_contribution: number;
  sheet_id: SheetId;
  sickness_contribution: number;
  health_contributions: number;
  user_id: string;
};

export type ReportView = Report & {
  base: number;
  expenses: number;
  income: number;
  pensions_summary: number;
  proceeds: number;
  social_security: number;
  tax: number;
};

type ReportListResult = {
  reports: Report[];
  count: number;
};

type ReportsKey = ["reports", SheetId] | ["reports", SheetId, PageArgs];

export type ReportApiService = {
  create: (args: Partial<Report>) => Promise<Report>;
  delete: (args: ReportId) => Promise<void>;
  list: QueryFunction<ReportListResult, ReportsKey>;
  listKey: (id: ReportId, page?: PageArgs) => ReportsKey;
  update: (args: Report) => Promise<Report>;
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
            .from<ReportView>(view)
            .select("*", { count: "estimated" })
            .eq("sheet_id", queryKey[1])
            .range(args.offset, args.offset + args.limit);
          if (error) throw error;
          return { reports: data, count: count ?? 0 };
        },
        listKey: (id, page) => {
          return page ? ["reports", id, page] : ["reports", id];
        },
        update: async (args) => {
          const { data, error } = await supabase
            .from<Report>(table)
            .update(args)
            .eq("id", args.id)
            .single();
          if (error) throw error;
          return data;
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
