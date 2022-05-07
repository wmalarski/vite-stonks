import { Company } from "@/services/CompanyApi";
import { Invoice } from "@/services/InvoiceApi";
import { Report } from "@/services/ReportApi";
import { Sheet } from "@/services/SheetApi";
import { factory, oneOf, primaryKey } from "@mswjs/data";
import { Entity, Value } from "@mswjs/data/lib/glossary";

export const dbIndexCounter = (() => {
  let index = 1;
  return () => {
    const result = index;
    index += 1;
    return result;
  };
})();

const directory = {
  sheet: {
    id: primaryKey(dbIndexCounter),
    account: String,
    address1: String,
    address2: String,
    bank: String,
    city: String,
    company: String,
    created_at: String,
    name: String,
    nip: String,
    user_id: String,
  },
  company: {
    id: primaryKey(dbIndexCounter),
    address1: String,
    address2: String,
    company: String,
    created_at: String,
    nip: String,
    sheet_id: oneOf("sheet"),
  },
  invoice: {
    id: primaryKey(dbIndexCounter),
    company_id: oneOf("company"),
    created_at: String,
    date: String,
    hours: Number,
    name: String,
    price: Number,
    sheet_id: oneOf("sheet"),
    title: String,
  },
  report: {
    id: primaryKey(dbIndexCounter),
    accident_premium: Number,
    date: String,
    disability_pension: Number,
    pension_contribution: Number,
    sheet_id: oneOf("sheet"),
    sickness_contribution: Number,
    health_contributions: Number,
    base: Number,
    expenses: Number,
    income: Number,
    pensions_summary: Number,
    proceeds: Number,
    social_security: Number,
    tax: Number,
  },
};

export type MockEntity<Key extends keyof typeof directory> = Entity<
  typeof directory,
  Key
>;

type MockValue<Key extends keyof typeof directory> = Value<
  typeof directory[Key],
  typeof directory
>;

export const db = factory(directory);

export const convert = {
  toSheet: (entity?: MockValue<"sheet"> | null): Sheet | undefined => {
    if (!entity || !entity.user_id) return undefined;
    return entity;
  },
  toCompany: (entity?: MockValue<"company"> | null): Company | undefined => {
    if (!entity || !entity.sheet_id?.id) return undefined;
    return { ...entity, sheet_id: entity.sheet_id?.id };
  },
  toInvoice: (entity?: MockValue<"invoice"> | null): Invoice | undefined => {
    if (!entity || !entity.company_id || !entity.sheet_id) return undefined;
    const company = convert.toCompany(entity.company_id);
    if (!company) return undefined;
    return {
      ...entity,
      company_id: entity.company_id?.id,
      company,
      sheet_id: entity.sheet_id?.id,
    };
  },
  toReport: (entity?: MockValue<"report"> | null): Report | undefined => {
    if (!entity || !entity.sheet_id) return undefined;
    return { ...entity, sheet_id: entity.sheet_id?.id };
  },
};
