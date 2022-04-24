export const paths = {
  home: "/",
  sheet: (sheetId: number): string => `/sheet/${sheetId}`,
  reports: (sheetId: number): string => `/sheet/${sheetId}/reports`,
  settings: (sheetId: number): string => `/sheet/${sheetId}/settings`,
  invoice: (sheetId: number, index: number): string =>
    `/sheet/${sheetId}/invoice/${index}`,
};
