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

type CompanyId = number;

export type Company = {
  address1: string;
  address2: string;
  company: string;
  created_at: string;
  id: CompanyId;
  nip: string;
  sheet_id: SheetId;
};

type CompanyListResult = {
  companies: Company[];
  count: number;
};

type CompaniesKey = ["companies", SheetId] | ["companies", SheetId, PageArgs];

export type CompanyApiService = {
  create: (args: Partial<Company>) => Promise<Company>;
  delete: (id: CompanyId) => Promise<void>;
  list: QueryFunction<CompanyListResult, CompaniesKey>;
  listKey: (id: SheetId, page?: PageArgs) => CompaniesKey;
  update: (args: Company) => Promise<Company>;
};

type CompanyApiContextValue =
  | {
      isInitialized: false;
    }
  | {
      isInitialized: true;
      api: CompanyApiService;
    };

export const CompanyApiContext = createContext<CompanyApiContextValue>({
  isInitialized: false,
});

export const useCompanyApi = (): CompanyApiService => {
  const context = useContext(CompanyApiContext);

  if (!context.isInitialized) {
    throw new Error("Company Api context not defined");
  }

  return context.api;
};

const table = "companies";

type Props = {
  children: ReactNode;
};

export const CompanyApiProvider = ({ children }: Props): ReactElement => {
  const value = useMemo<CompanyApiContextValue>(() => {
    return {
      isInitialized: true,
      api: {
        create: async (args) => {
          const { error, data } = await supabase
            .from<Company>(table)
            .insert(args)
            .single();
          if (error) throw error;
          return data;
        },
        delete: async (id) => {
          const { error } = await supabase
            .from<Company>(table)
            .delete()
            .eq("id", id);
          if (error) throw error;
        },
        list: async ({ queryKey }) => {
          const args = queryKey[2] ?? { limit: 50, offset: 0 };
          const { data, error, count } = await supabase
            .from<Company>(table)
            .select("*", { count: "estimated" })
            .eq("sheet_id", queryKey[1])
            .range(args.offset, args.offset + args.limit);
          if (error) throw error;
          return { companies: data, count: count ?? 0 };
        },
        listKey: (id, page) => {
          return page ? ["companies", id, page] : ["companies", id];
        },
        update: async (args) => {
          const { data, error } = await supabase
            .from<Company>(table)
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
    <CompanyApiContext.Provider value={value}>
      {children}
    </CompanyApiContext.Provider>
  );
};
