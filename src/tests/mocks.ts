import { AuthApiService } from "@/services/AuthApi";
import { Company, CompanyApiService } from "@/services/CompanyApi";
import { Invoice, InvoiceApiService } from "@/services/InvoiceApi";
import { Report, ReportApiService, ReportView } from "@/services/ReportApi";
import { Sheet, SheetApiService } from "@/services/SheetApi";
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

export const mockAuthApi = (): AuthApiService => {
  return {
    signIn: () => {
      return Promise.resolve(mockUser());
    },
    signOut: () => {
      return Promise.resolve();
    },
  };
};

export const mockSheetApi = ({
  initialCount = 5,
}: {
  initialCount?: number;
} = {}): SheetApiService => {
  const collection: Sheet[] = Array(initialCount)
    .fill(0)
    .map(() => mockSheet());

  return {
    create: (args) => {
      const data = mockSheet(args);
      collection.push(data);
      return Promise.resolve(data);
    },
    delete: (id) => {
      const index = collection.findIndex((entry) => entry.id === id);
      if (index < 0) return Promise.reject();
      collection.splice(index, 1);
      return Promise.resolve();
    },
    get: ({ queryKey }) => {
      const data = collection.find((entry) => entry.id == queryKey[1]);
      if (!data) return Promise.reject();
      return Promise.resolve(data);
    },
    key: (id) => {
      return ["sheet", id];
    },
    list: ({ queryKey }) => {
      const { limit, offset } = queryKey[1] ?? { limit: 50, offset: 0 };
      const sliced = collection.slice(offset, offset + limit);
      return Promise.resolve({ sheets: sliced, count: collection.length });
    },
    listKey: (pagination) => {
      return pagination ? ["sheets", pagination] : ["sheets"];
    },
    update: (args) => {
      const index = collection.findIndex((entry) => entry.id === args.id);
      if (index < 0) return Promise.reject();
      const previous = collection[index];
      const next = { ...previous, ...args };
      collection.splice(index, 1, next);
      return Promise.resolve(next);
    },
  };
};

export const mockInvoiceApi = (): InvoiceApiService => {
  const collection: Invoice[] = [];
  return {
    create: (args) => {
      const invoice = mockInvoice(args);
      collection.push(invoice);
      return Promise.resolve(invoice);
    },
    delete: (id) => {
      const index = collection.findIndex((invoice) => invoice.id === id);
      if (index < 0) return Promise.reject();
      collection.splice(index, 1);
      return Promise.resolve();
    },
    get: ({ queryKey }) => {
      const data = collection.find((entry) => entry.id == queryKey[1]);
      if (!data) return Promise.reject();
      return Promise.resolve(data);
    },
    key: (id) => {
      return ["invoice", id];
    },
    list: ({ queryKey }) => {
      const key = queryKey[1];
      const { limit, offset } = queryKey[2] ?? { limit: 50, offset: 0 };
      const filtered = collection.filter(({ sheet_id }) => sheet_id === key);
      const sliced = filtered.slice(offset, offset + limit);
      return Promise.resolve({ invoices: sliced, count: filtered.length });
    },
    listKey: (id) => {
      return ["invoices", id];
    },
    update: (args) => {
      const index = collection.findIndex((entry) => entry.id === args.id);
      if (index < 0) return Promise.reject();
      const previous = collection[index];
      const next = { ...previous, ...args };
      collection.splice(index, 1, next);
      return Promise.resolve(next);
    },
  };
};

export const mockReportApi = (): ReportApiService => {
  const collection: ReportView[] = [];
  return {
    create: (args) => {
      const report = mockReportView(args);
      collection.push(report);
      return Promise.resolve(report);
    },
    delete: (id) => {
      const index = collection.findIndex((invoice) => invoice.id === id);
      if (index < 0) return Promise.reject();
      collection.splice(index, 1);
      return Promise.resolve();
    },
    list: ({ queryKey }) => {
      const key = queryKey[1];
      const { limit, offset } = queryKey[2] ?? { limit: 50, offset: 0 };
      const filtered = collection.filter(({ sheet_id }) => sheet_id === key);
      const sliced = filtered.slice(offset, offset + limit);
      return Promise.resolve({ reports: sliced, count: filtered.length });
    },
    listKey: (id, page) => {
      return page ? ["reports", id, page] : ["reports", id];
    },
    update: (args) => {
      const index = collection.findIndex((entry) => entry.id === args.id);
      if (index < 0) return Promise.reject();
      const previous = collection[index];
      const next = { ...previous, ...args };
      collection.splice(index, 1, next);
      return Promise.resolve(next);
    },
  };
};

export const mockCompanyApi = (): CompanyApiService => {
  const collection: Company[] = [];
  return {
    create: (args) => {
      const company = mockCompany(args);
      collection.push(company);
      return Promise.resolve(company);
    },
    delete: (id) => {
      const index = collection.findIndex((company) => company.id === id);
      if (index < 0) return Promise.reject();
      collection.splice(index, 1);
      return Promise.resolve();
    },
    list: ({ queryKey }) => {
      const key = queryKey[1];
      const { limit, offset } = queryKey[2] ?? { limit: 50, offset: 0 };
      const filtered = collection.filter(({ sheet_id }) => sheet_id === key);
      const sliced = filtered.slice(offset, offset + limit);
      return Promise.resolve({ companies: sliced, count: filtered.length });
    },
    listKey: (id, page) => {
      return page ? ["companies", id, page] : ["companies", id];
    },
    update: (args) => {
      const index = collection.findIndex((entry) => entry.id === args.id);
      if (index < 0) return Promise.reject();
      const previous = collection[index];
      const next = { ...previous, ...args };
      collection.splice(index, 1, next);
      return Promise.resolve(next);
    },
    search: ({ queryKey }) => {
      const key = queryKey[1];
      const filtered = collection.filter(({ sheet_id }) => sheet_id === key);
      const sliced = filtered.slice(0, 5);
      return Promise.resolve({ companies: sliced, count: filtered.length });
    },
    searchKey: (id, query) => {
      return ["companiesSearch", id, query];
    },
  };
};
