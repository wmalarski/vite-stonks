import { factory, primaryKey } from "@mswjs/data";

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
    sheet_id: String,
  },
  invoice: {
    id: primaryKey(dbIndexCounter),
    company_id: String,
    created_at: String,
    date: String,
    hours: Number,
    name: String,
    price: Number,
    sheet_id: String,
    title: String,
  },
  report: {
    id: primaryKey(dbIndexCounter),
    accident_premium: Number,
    date: String,
    disability_pension: Number,
    pension_contribution: Number,
    sheet_id: String,
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

export const db = factory(directory);
