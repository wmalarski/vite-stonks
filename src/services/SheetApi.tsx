import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { QueryFunction } from "react-query";
import { supabase } from "./supabase";

export type Doc = {
  created_at: string;
  id: number;
  name: string;
  sheet_id: string;
  user_id: string;
};

export type CreateDocArgs = {
  name: string;
  sheet_id: string;
  user_id: string;
};

export type UpdateDocArgs = {
  id: number;
  name: string;
  sheet_id: string;
};

export type PageArgs = {
  limit: number;
  offset: number;
};

type DocListResult = {
  docs: Doc[];
  count: number;
};

type DocsKey = ["docs"] | ["docs", PageArgs];
type DocKey = ["doc", number];

export type DocApiService = {
  create: (args: CreateDocArgs) => Promise<Doc>;
  delete: (id: number) => Promise<void>;
  get: QueryFunction<Doc, DocKey>;
  key: (id: number) => DocKey;
  list: QueryFunction<DocListResult, DocsKey>;
  listKey: (pagination?: PageArgs) => DocsKey;
  update: (args: UpdateDocArgs) => Promise<Doc>;
};

type DocApiContextValue =
  | {
      isInitialized: false;
    }
  | {
      isInitialized: true;
      api: DocApiService;
    };

export const DocApiContext = createContext<DocApiContextValue>({
  isInitialized: false,
});

export const useDocApi = (): DocApiService => {
  const context = useContext(DocApiContext);

  if (!context.isInitialized) {
    throw new Error("Doc Api context not defined");
  }

  return context.api;
};

type Props = {
  children: ReactNode;
};

const table = "Doc";

export const DocApiProvider = ({ children }: Props): ReactElement => {
  const value = useMemo<DocApiContextValue>(() => {
    return {
      isInitialized: true,
      api: {
        create: async (args) => {
          const { error, data } = await supabase
            .from<Doc>(table)
            .insert(args)
            .single();
          if (error) throw error;
          return data;
        },
        delete: async (id) => {
          const { error } = await supabase
            .from<Doc>(table)
            .delete()
            .eq("id", id);
          if (error) throw error;
        },
        get: async ({ queryKey }) => {
          const { data, error } = await supabase
            .from<Doc>(table)
            .select("*")
            .eq("id", queryKey[1])
            .single();
          if (error) throw error;
          return data;
        },
        key: (id) => {
          return ["doc", id];
        },
        list: async ({ queryKey }) => {
          const args = queryKey[1] ?? { limit: 50, offset: 0 };
          const { data, error, count } = await supabase
            .from<Doc>(table)
            .select("*", { count: "estimated" })
            .range(args.offset, args.offset + args.limit);
          if (error) throw error;
          return { docs: data, count: count ?? 0 };
        },
        listKey: (pagination) => {
          return pagination ? ["docs", pagination] : ["docs"];
        },
        update: async (args) => {
          const { data, error } = await supabase
            .from<Doc>(table)
            .update(args)
            .single();
          if (error) throw error;
          return data;
        },
      },
    };
  }, []);

  return (
    <DocApiContext.Provider value={value}>{children}</DocApiContext.Provider>
  );
};
