import { Report } from "@/services/ReportApi";
import { Sheet } from "@/services/SheetApi";
import { ReactElement } from "react";
import { CopyReport } from "./CopyReport/CopyReport";
import { EditReport } from "./EditReport/EditReport";
import { RemoveReport } from "./RemoveReport/RemoveReport";
import * as classes from "./ReportActions.css";

type Props = {
  report: Report;
  sheet: Sheet;
};

export const ReportActions = ({ report, sheet }: Props): ReactElement => {
  return (
    <div className={classes.list}>
      <EditReport report={report} sheet={sheet} />
      <CopyReport report={report} sheet={sheet} />
      <RemoveReport report={report} sheet={sheet} />
    </div>
  );
};
