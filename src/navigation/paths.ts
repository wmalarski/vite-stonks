export const paths = {
  home: "/",
  sheet: (sheetId: string): string => `/sheet/${sheetId}`,
  settings: (sheetId: string): string => `/sheet/${sheetId}/settings`,
  invoice: (sheetId: string, invoiceId: string): string =>
    `/sheet/${sheetId}/invoice/${invoiceId}`,
};
