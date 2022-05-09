import { Company } from "@/services/CompanyApi";
import { Invoice } from "@/services/InvoiceApi";
import { Report, ReportView } from "@/services/ReportApi";
import { Sheet } from "@/services/SheetApi";
import { User } from "@supabase/supabase-js";

export const mockSheet = (update: Partial<Sheet> = {}): Sheet => {
  const id = update.id ?? Math.floor(Math.random() * 1e10);
  return {
    created_at: new Date().toISOString(),
    id,
    name: `Mocked-${id}`,
    user_id: "1",
    account: "account",
    address1: "address1",
    address2: "address2",
    bank: "Bank",
    city: "City",
    company: "company",
    nip: "nip",
    ...update,
  };
};

export const mockInvoice = (update: Partial<Invoice> = {}): Invoice => {
  const id = Math.floor(Math.random() * 1e10);
  return {
    company: mockCompany(),
    company_id: 1,
    created_at: new Date().toISOString(),
    date: new Date().toISOString(),
    hours: 160,
    id,
    name: `Name-${id}`,
    price: 234,
    sheet_id: 0,
    title: "Title",
    ...update,
  };
};

export const mockReport = (update: Partial<Report> = {}): Report => {
  const id = Math.floor(Math.random() * 1e10);
  return {
    accident_premium: 10,
    date: new Date().toISOString(),
    disability_pension: 12,
    health_contributions: 13,
    id,
    pension_contribution: 15,
    sheet_id: 0,
    sickness_contribution: 18,
    ...update,
  };
};

export const mockReportView = (
  update: Partial<ReportView> = {}
): ReportView => {
  const id = Math.floor(Math.random() * 1e10);
  return {
    accident_premium: 10,
    base: 11,
    date: new Date().toISOString(),
    disability_pension: 12,
    expenses: 0,
    health_contributions: 13,
    id,
    income: 14,
    pension_contribution: 15,
    pensions_summary: 16,
    proceeds: 17,
    sheet_id: 0,
    sickness_contribution: 18,
    social_security: 19,
    tax: 20,
    ...update,
  };
};

export const mockCompany = (update: Partial<Company> = {}): Company => {
  const id = Math.floor(Math.random() * 1e10);
  return {
    address1: "Address1",
    address2: "Address2",
    company: "Company",
    created_at: new Date().toISOString(),
    id,
    nip: "678767887",
    sheet_id: 1,
    ...update,
  };
};

export const mockUser = (update: Partial<User> = {}): User => {
  const id = Math.floor(Math.random() * 1e10);
  return {
    app_metadata: {},
    aud: "aud",
    created_at: new Date().toISOString(),
    id: String(id),
    user_metadata: {},
    ...update,
  };
};
