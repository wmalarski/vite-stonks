import { Company } from "@/services/CompanyApi";
import { Sheet } from "@/services/SheetApi";
import { ReactElement } from "react";
import * as classes from "./CompanyActions.css";
import { EditCompany } from "./EditCompany/EditCompany";
import { RemoveCompany } from "./RemoveCompany/RemoveCompany";

type Props = {
  company: Company;
  sheet: Sheet;
};

export const CompanyActions = ({ company, sheet }: Props): ReactElement => {
  return (
    <div className={classes.list}>
      <EditCompany company={company} sheet={sheet} />
      <RemoveCompany company={company} sheet={sheet} />
    </div>
  );
};
