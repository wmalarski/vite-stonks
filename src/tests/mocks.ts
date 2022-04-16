import { Doc, DocApiService } from "@/services/DocApi";
import { Invoice, InvoiceApiService } from "@/services/InvoiceApi";

export const mockDoc = (update: Partial<Doc> = {}): Doc => {
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
  const id = update.id ?? Math.floor(Math.random() * 1e10);
  return {
    address: "Address",
    company: "Company",
    date: new Date().toISOString(),
    hours: 160,
    id: String(id),
    index: 0,
    name: `Name-${id}`,
    nip: "4567890",
    price: 234,
    summary: 23456,
    title: "Title",
    ...update,
  };
};

export const mockDocApi = ({
  initialCount = 5,
}: {
  initialCount?: number;
} = {}): DocApiService => {
  const collection: Doc[] = Array(initialCount)
    .fill(0)
    .map(() => mockDoc());

  return {
    create: (args) => {
      const doc = mockDoc(args);
      collection.push(doc);
      return Promise.resolve(doc);
    },
    delete: (id) => {
      const index = collection.findIndex((entry) => entry.id === id);
      if (index < 0) return Promise.reject();
      collection.splice(index, 1);
      return Promise.resolve();
    },
    get: ({ queryKey }) => {
      const doc = collection.find((entry) => entry.id == queryKey[1]);
      if (!doc) return Promise.reject();
      return Promise.resolve(doc);
    },
    key: (id) => {
      return ["doc", id];
    },
    list: ({ queryKey }) => {
      const { limit, offset } = queryKey[1] ?? { limit: 50, offset: 0 };
      const sliced = collection.slice(offset, offset + limit);
      return Promise.resolve({ docs: sliced, count: collection.length });
    },
    listKey: (pagination) => {
      return pagination ? ["docs", pagination] : ["docs"];
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

export const mockSpreadSheetApi = (): InvoiceApiService => {
  const collection: Record<string, Invoice[]> = {};
  return {
    list: ({ queryKey }) => {
      const invoices = collection[queryKey[1]];
      if (!invoices) return Promise.reject();
      return Promise.resolve(invoices);
    },
    keyList: (id) => {
      return ["invoices", id];
    },
    get: ({ queryKey }) => {
      const invoices = collection[queryKey[1]];
      return Promise.resolve(invoices[queryKey[2]]);
    },
    key: (id, row) => {
      return ["invoice", id, row];
    },
  };
};
