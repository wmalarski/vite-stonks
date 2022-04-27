import { Report } from "@/services/ReportApi";
import { Sheet } from "@/services/SheetApi";
import { ReactElement } from "react";
import { RemoveReport } from "./RemoveReport/RemoveReport";

type Props = {
  report: Report;
  sheet: Sheet;
};

export const ReportActions = ({ report, sheet }: Props): ReactElement => {
  return <RemoveReport report={report} sheet={sheet} />;
};
