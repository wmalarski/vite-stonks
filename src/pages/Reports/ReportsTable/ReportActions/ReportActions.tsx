import { Sheet } from "@/services/SheetApi";
import { ReactElement } from "react";
import { RemoveReport } from "./RemoveReport/RemoveReport";

type Props = {
  index: number;
  sheet: Sheet;
};

export const ReportActions = ({ index, sheet }: Props): ReactElement => {
  return <RemoveReport index={index} sheet={sheet} />;
};
