export const paths = {
  home: "/",
  sheet: (sheetId: number): string => `/sheet/${sheetId}`,
  companies: (sheetId: number): string => `/sheet/${sheetId}/companies`,
  reports: (sheetId: number): string => `/sheet/${sheetId}/reports`,
  settings: (sheetId: number): string => `/sheet/${sheetId}/settings`,
  invoice: (sheetId: number, invoiceId: number): string =>
    `/sheet/${sheetId}/invoice/${invoiceId}`,
};
