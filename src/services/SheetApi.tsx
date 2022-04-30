import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { QueryFunction } from "react-query";
import { supabase } from "./supabase";
import { PageArgs } from "./types";

export type SheetId = number;

export type Sheet = {
  account: string;
  address1: string;
  address2: string;
  bank: string;
  city: string;
  company: string;
  created_at: string;
  id: SheetId;
  name: string;
  nip: string;
  user_id: string;
};

export type UpdateSheetArgs = Partial<Omit<Sheet, "created_at">> &
  Pick<Sheet, "id">;

type SheetListResult = {
  sheets: Sheet[];
  count: number;
};

type SheetsKey = ["sheets"] | ["sheets", PageArgs];
type SheetKey = ["sheet", number];

export type SheetApiService = {
  create: (args: Sheet) => Promise<Sheet>;
  delete: (id: SheetId) => Promise<void>;
  get: QueryFunction<Sheet, SheetKey>;
  key: (id: SheetId) => SheetKey;
  list: QueryFunction<SheetListResult, SheetsKey>;
  listKey: (pagination?: PageArgs) => SheetsKey;
  update: (args: UpdateSheetArgs) => Promise<Sheet>;
};

type SheetApiContextValue =
  | {
      isInitialized: false;
    }
  | {
      isInitialized: true;
      api: SheetApiService;
    };

export const SheetApiContext = createContext<SheetApiContextValue>({
  isInitialized: false,
});

export const useSheetApi = (): SheetApiService => {
  const context = useContext(SheetApiContext);

  if (!context.isInitialized) {
    throw new Error("Sheet Api context not defined");
  }

  return context.api;
};

const table = "sheets";

type Props = {
  children: ReactNode;
};

export const SheetApiProvider = ({ children }: Props): ReactElement => {
  const value = useMemo<SheetApiContextValue>(() => {
    return {
      isInitialized: true,
      api: {
        create: async (args) => {
          const { error, data } = await supabase
            .from<Sheet>(table)
            .insert(args)
            .single();
          if (error) throw error;
          return data;
        },
        delete: async (id) => {
          const { error } = await supabase
            .from<Sheet>(table)
            .delete()
            .eq("id", id);
          if (error) throw error;
        },
        get: async ({ queryKey }) => {
          const { data, error } = await supabase
            .from<Sheet>(table)
            .select("*")
            .eq("id", queryKey[1])
            .single();
          if (error) throw error;
          return data;
        },
        key: (id) => {
          return ["sheet", id];
        },
        list: async ({ queryKey }) => {
          const args = queryKey[1] ?? { limit: 50, offset: 0 };
          const { data, error, count } = await supabase
            .from<Sheet>(table)
            .select("*", { count: "estimated" })
            .range(args.offset, args.offset + args.limit);
          if (error) throw error;
          return { sheets: data, count: count ?? 0 };
        },
        listKey: (page) => {
          return page ? ["sheets", page] : ["sheets"];
        },
        update: async (args) => {
          const { data, error } = await supabase
            .from<Sheet>(table)
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
    <SheetApiContext.Provider value={value}>
      {children}
    </SheetApiContext.Provider>
  );
};
