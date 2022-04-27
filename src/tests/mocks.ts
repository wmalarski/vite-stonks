import { AuthApiService } from "@/services/AuthApi";
import { Invoice, InvoiceApiService } from "@/services/InvoiceApi";
import { Report, ReportApiService } from "@/services/ReportApi";
import { Sheet, SheetApiService } from "@/services/SheetApi";
import { User } from "@supabase/supabase-js";
import moment from "moment";

export const mockSheet = (update: Partial<Sheet> = {}): Sheet => {
  const id = update.id ?? Math.floor(Math.random() * 1e10);
  return {
    created_at: new Date().toISOString(),
    id,
    name: `Mocked-${id}`,
    sheet_id: "1B8yq3arNoNU8izDdA_GDWt-jYhv6GhIBCvIncv8MMz8",
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
    address1: "Address",
    address2: "Address2",
    company: "Company",
    date: moment(new Date()),
    hours: 160,
    id,
    name: `Name-${id}`,
    nip: "4567890",
    price: 234,
    sheet_id: 0,
    summary: 23456,
    title: "Title",
    ...update,
  };
};

export const mockReport = (update: Partial<Report> = {}): Report => {
  return {
    accidentPremium: 10,
    base: 11,
    date: moment(new Date()),
    disabilityPension: 12,
    expenses: 0,
    healthContributions: 13,
    income: 14,
    pensionContribution: 15,
    pensionsSummary: 16,
    proceeds: 17,
    sicknessContribution: 18,
    socialSecurity: 19,
    tax: 20,
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
      collection.push(args);
      return Promise.resolve(args);
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
      return Promise.resolve({ sheets: sliced, count: filtered.length });
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
  const collection: Record<string, Report[]> = {};
  return {
    create: ({ id, data }) => {
      const reports = collection[id];
      reports.push(mockReport(data));
      return Promise.resolve(reports.length - 1);
    },
    delete: ({ id, index }) => {
      const reports = collection[id];
      reports.splice(index, 1);
      return Promise.resolve();
    },
    list: ({ queryKey }) => {
      const reports = collection[queryKey[1]];
      if (!reports) return Promise.reject();
      return Promise.resolve(reports);
    },
    listKey: (id) => {
      return ["reports", id];
    },
  };
};
