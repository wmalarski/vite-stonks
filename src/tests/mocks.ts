import { Sheet, SheetApiService } from "@/services/SheetApi";

export const mockSheet = (update: Partial<Sheet> = {}): Sheet => {
  const id = update.id ?? Math.floor(Math.random() * 1e10);
  return {
    createdAt: new Date().toISOString(),
    id,
    name: `Mocked-${id}`,
    sheetId: "1B8yq3arNoNU8izDdA_GDWt-jYhv6GhIBCvIncv8MMz8",
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
      const sheet = mockSheet(args);
      collection.push(sheet);
      return Promise.resolve(sheet);
    },
    delete: (id) => {
      const index = collection.findIndex((entry) => entry.id === id);
      if (index < 0) return Promise.reject();
      collection.splice(index, 1);
      return Promise.resolve();
    },
    get: ({ queryKey }) => {
      const sheet = collection.find((entry) => entry.id == queryKey[1]);
      if (!sheet) return Promise.reject();
      return Promise.resolve(sheet);
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
