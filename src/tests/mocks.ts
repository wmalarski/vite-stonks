import { Invoice, InvoiceApiService } from "@/services/InvoiceApi";
import { Sheet, SheetApiService } from "@/services/SheetApi";

export const mockSheet = (update: Partial<Sheet> = {}): Sheet => {
  const id = update.id ?? Math.floor(Math.random() * 1e10);
  return {
    created_at: new Date().toISOString(),
    id,
    name: `Mocked-${id}`,
    sheet_id: "1B8yq3arNoNU8izDdA_GDWt-jYhv6GhIBCvIncv8MMz8",
    user_id: "1",
    ...update,
  };
};

export const mockInvoice = (update: Partial<Invoice> = {}): Invoice => {
  const id = Math.floor(Math.random() * 1e10);
  return {
    address: "Address",
    company: "Company",
    date: new Date().toISOString(),
    hours: 160,
    index: 0,
    name: `Name-${id}`,
    nip: "4567890",
    price: 234,
    summary: 23456,
    title: "Title",
    ...update,
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
  const collection: Record<string, Invoice[]> = {};
  return {
    create: ({ id, create }) => {
      const invoices = collection[id];
      invoices.splice(create.index, 0, create);
      return Promise.resolve();
    },
    delete: ({ id, index }) => {
      const invoices = collection[id];
      invoices.splice(index, 1);
      return Promise.resolve();
    },
    get: ({ queryKey }) => {
      const invoices = collection[queryKey[1]];
      return Promise.resolve(invoices[queryKey[2]]);
    },
    key: (id, row) => {
      return ["invoice", id, row];
    },
    list: ({ queryKey }) => {
      const invoices = collection[queryKey[1]];
      if (!invoices) return Promise.reject();
      return Promise.resolve(invoices);
    },
    listKey: (id) => {
      return ["invoices", id];
    },
    update: ({ id, update }) => {
      const invoices = collection[id];
      invoices.splice(update.index, 1, update);
      return Promise.resolve();
    },
  };
};
