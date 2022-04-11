export const paths = {
  home: "/",
  doc: (docId: number): string => `/sheet/${docId}`,
  settings: (docId: number): string => `/sheet/${docId}/settings`,
  invoice: (docId: number, invoiceId: string): string =>
    `/sheet/${docId}/invoice/${invoiceId}`,
};
