import { Company } from "@/services/CompanyApi";
import { Invoice } from "@/services/InvoiceApi";
import { ReportView } from "@/services/ReportApi";
import { Sheet } from "@/services/SheetApi";
import { mockCompany, mockInvoice, mockReportView, mockSheet } from "./mocks";
import { db } from "./models";

export const createSheet = (args: Partial<Sheet> = {}): Sheet => {
  const sheet = mockSheet(args);
  const result = db.sheet.create(sheet);
  return result;
};

export const createSheets = (count: number): Sheet[] => {
  return Array(count).fill({}).map(createSheet);
};

export const createCompany = (args: Partial<Company> = {}): Company => {
  const company = mockCompany(args);
  const result = db.company.create(company);
  return result;
};

export const createCompanies = (count: number, sheet: Sheet): Company[] => {
  return Array(count).fill({ sheet_id: sheet.id }).map(createCompany);
};

export const createInvoice = (
  args: Partial<Invoice> & Pick<Invoice, "company">
): Invoice => {
  const invoice = mockInvoice(args);
  const result = db.invoice.create(invoice);
  return { ...result, company: args.company };
};

export const createInvoices = (
  count: number,
  sheet: Sheet,
  company: Company
): Invoice[] => {
  return Array(count).fill({ sheet_id: sheet.id, company }).map(createInvoice);
};

export const createReport = (args: Partial<ReportView> = {}): ReportView => {
  const report = mockReportView(args);
  const result = db.report.create(report);
  return result;
};

export const createReports = (count: number, sheet: Sheet): ReportView[] => {
  return Array(count).fill({ sheet_id: sheet.id }).map(createReport);
};

export const createSheetWithData = () => {
  const sheet = createSheet();
  const companies = createCompanies(5, sheet);
  createReports(5, sheet);
  companies.forEach((company) => createInvoices(3, sheet, company));
  return sheet;
};

export const initialize = () => {
  createSheetWithData();
};
