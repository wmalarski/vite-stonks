export const paths = {
  home: "/",
  sheet: (sheetId: number): string => `/sheet/${sheetId}`,
  settings: (sheetId: number): string => `/sheet/${sheetId}/settings`,
  invoice: (sheetId: number, invoiceId: string): string =>
    `/sheet/${sheetId}/invoice/${invoiceId}`,
};
