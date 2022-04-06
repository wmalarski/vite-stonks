import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { QueryFunction } from "react-query";
import { nhost } from "./nhost";

export type Sheet = {
  createdAt: string;
  id: number;
  name: string;
  sheetId: string;
};

export type CreateSheetArgs = {
  name: string;
  sheetId: string;
};

export type UpdateSheetArgs = {
  id: number;
  name: string;
  sheetId: string;
};

export type Pagination = {
  limit: number;
  offset: number;
};

type SheetsKey = ["sheets"] | ["sheets", Pagination];
type SheetKey = ["sheet", number];

type SheetApiService = {
  create: (args: CreateSheetArgs) => Promise<Sheet>;
  delete: (id: number) => Promise<void>;
  get: QueryFunction<Sheet, SheetKey>;
  key: (id: number) => SheetKey;
  list: QueryFunction<Sheet[], SheetsKey>;
  listKey: (pagination?: Pagination) => SheetsKey;
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

const SheetApiContext = createContext<SheetApiContextValue>({
  isInitialized: false,
});

export const useSheetApi = (): SheetApiService => {
  const context = useContext(SheetApiContext);

  if (!context.isInitialized) {
    throw new Error("Sheet Api context not defined");
  }

  return context.api;
};

type Props = {
  children: ReactNode;
};

export const SheetApiProvider = ({ children }: Props): ReactElement => {
  const value = useMemo<SheetApiContextValue>(() => {
    return {
      isInitialized: true,
      api: {
        create: async (args) => {
          const { data, error } = await nhost.graphql.request(
            `mutation ($name: String, $sheetId: String) {
              insert: insert_sheets_one(object: {
                name: $name,
                sheetId: $sheetId
              }) {
                createdAt
                id
                name
                sheetId
              }
            }`,
            args
          );
          if (error) throw error;
          return (data as { insert: Sheet }).insert;
        },
        delete: async (id) => {
          const { error } = await nhost.graphql.request(
            `mutation ($id: Int!){
              delete: delete_sheets_by_pk(id: $id) {
                id  
              }
            }`,
            { id }
          );
          if (error) throw error;
        },
        get: async ({ queryKey }) => {
          const { data, error } = await nhost.graphql.request(
            `query ($id: Int!) {
              sheet: sheets_by_pk(id: $id) {
                createdAt
                id
                name
                sheetId
              }
            }`,
            { id: queryKey[1] }
          );
          if (error) throw error;
          return (data as { sheet: Sheet }).sheet;
        },
        key: (id) => {
          return ["sheet", id];
        },
        list: async ({ queryKey }) => {
          const { data, error } = await nhost.graphql.request(
            `query ($limit: Int, $offset: Int) {
              sheets(order_by: {createdAt: asc}, limit: $limit, offset: $offset) {
                createdAt
                id
                name
                sheetId 
              }
            }`,
            { id: queryKey[1] }
          );
          if (error) throw error;
          return (data as { sheets: Sheet[] }).sheets;
        },
        listKey: (pagination) => {
          return pagination ? ["sheets", pagination] : ["sheets"];
        },
        update: async (args) => {
          const { data, error } = await nhost.graphql.request(
            `mutation ($id:Int!, $name: String, $sheetId: String) {
              update: update_sheets_by_pk(pk_columns: { id: $id }, _set: { name: $name, sheetId: $sheetId }) {
                createdAt
                id
                name
                sheetId
              }
            }`,
            args
          );
          if (error) throw error;
          return (data as { update: Sheet }).update;
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
