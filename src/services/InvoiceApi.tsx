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

export type InvoiceId = number;

export type Invoice = {
  address1: string;
  address2: string;
  company: string;
  created_at: string;
  date: string;
  hours: number;
  id: InvoiceId;
  name: string;
  nip: string;
  price: number;
  sheet_id: SheetId;
  title: string;
};

type InvoiceListResult = {
  invoices: Invoice[];
  count: number;
};

type InvoicesKey = ["invoices", SheetId] | ["invoices", SheetId, PageArgs];
type InvoiceKey = ["invoice", InvoiceId];

export type InvoiceApiService = {
  create: (args: Invoice) => Promise<Invoice>;
  delete: (args: InvoiceId) => Promise<void>;
  get: QueryFunction<Invoice, InvoiceKey>;
  key: (id: InvoiceId) => InvoiceKey;
  list: QueryFunction<InvoiceListResult, InvoicesKey>;
  listKey: (id: SheetId, page?: PageArgs) => InvoicesKey;
  update: (args: Invoice) => Promise<Invoice>;
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

const table = "invoices";

type Props = {
  children: ReactNode;
};

export const InvoiceApiProvider = ({ children }: Props): ReactElement => {
  const value = useMemo<InvoiceApiContextValue>(() => {
    return {
      isInitialized: true,
      api: {
        create: async (args) => {
          const { error, data } = await supabase
            .from<Invoice>(table)
            .insert(args)
            .single();
          if (error) throw error;
          return data;
        },
        delete: async (id) => {
          const { error } = await supabase
            .from<Invoice>(table)
            .delete()
            .eq("id", id);
          if (error) throw error;
        },
        get: async ({ queryKey }) => {
          const { data, error } = await supabase
            .from<Invoice>(table)
            .select("*")
            .eq("id", queryKey[1])
            .single();
          if (error) throw error;
          return data;
        },
        key: (id) => {
          return ["invoice", id];
        },
        list: async ({ queryKey }) => {
          const args = queryKey[2] ?? { limit: 50, offset: 0 };
          const { data, error, count } = await supabase
            .from<Invoice>(table)
            .select("*", { count: "estimated" })
            .eq("sheet_id", queryKey[1])
            .range(args.offset, args.offset + args.limit);
          if (error) throw error;
          return { invoices: data, count: count ?? 0 };
        },
        listKey: (id, page) => {
          return page ? ["invoices", id, page] : ["invoices", id];
        },
        update: async (args) => {
          const { data, error } = await supabase
            .from<Invoice>(table)
            .update(args)
            .eq("id", args.id)
            .single();
          if (error) throw error;
          return data;
        },
      },
    };
  }, []);

  if (!value) return <>{children}</>;

  return (
    <InvoiceApiContext.Provider value={value}>
      {children}
    </InvoiceApiContext.Provider>
  );
};
