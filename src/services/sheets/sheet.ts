import { QueryFunction } from "react-query";
import { nhost } from "../nhost";
import {
  CreateSheetArgs,
  Pagination,
  Sheet,
  SheetKey,
  SheetsKey,
  UpdateSheetArgs,
} from "../types";

export const createSheet = async (args: CreateSheetArgs): Promise<Sheet> => {
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
};

export const deleteSheet = async (id: number): Promise<void> => {
  const { error } = await nhost.graphql.request(
    `mutation ($id: Int!){
      delete: delete_sheets_by_pk(id: $id) {
        id  
      }
    }`,
    { id }
  );
  if (error) throw error;
};

export const getSheet: QueryFunction<Sheet, SheetKey> = async ({
  queryKey,
}): Promise<Sheet> => {
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
};

export const keySheet = (id: number): SheetKey => {
  return ["sheet", id];
};

export const listSheet: QueryFunction<Sheet[], SheetsKey> = async ({
  queryKey,
}): Promise<Sheet[]> => {
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
};

export const listKeySheet = (pagination?: Pagination): SheetsKey => {
  return pagination ? ["sheets", pagination] : ["sheets"];
};

export const updateSheet = async (args: UpdateSheetArgs): Promise<Sheet> => {
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
};
