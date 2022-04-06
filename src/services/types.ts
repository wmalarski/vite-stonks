import { QueryFunction } from "react-query";

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

export type SheetsKey = ["sheets"] | ["sheets", Pagination];
export type SheetKey = ["sheet", number];

export type ApiService = {
  sheet: {
    create: (args: CreateSheetArgs) => Promise<Sheet>;
    delete: (id: number) => Promise<void>;
    get: QueryFunction<Sheet, SheetKey>;
    key: (id: number) => SheetKey;
    list: QueryFunction<Sheet[], SheetsKey>;
    listKey: (pagination?: Pagination) => SheetsKey;
    update: (args: UpdateSheetArgs) => Promise<Sheet>;
  };
};
