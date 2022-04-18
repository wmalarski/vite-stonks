import { Invoice } from "@/services/InvoiceApi";
import { Profile } from "@/services/ProfileApi";
import { ReactElement } from "react";
import * as classes from "./InvoicePreview.css";
import { PreviewCompanyInfo } from "./PreviewCompanyInfo/PreviewCompanyInfo";
import { PreviewHeader } from "./PreviewHeader/PreviewHeader";
import { PreviewInfo } from "./PreviewInfo/PreviewInfo";
import { PreviewMyInfo } from "./PreviewMyInfo/PreviewMyInfo";
import { PreviewNotes } from "./PreviewNotes/PreviewNotes";
import { PreviewSummary } from "./PreviewSummary/PreviewSummary";
import { PreviewTable } from "./PreviewTable/PreviewTable";

type Props = {
  profile: Profile;
  invoice: Invoice;
};

export const InvoicePreview = ({ profile, invoice }: Props): ReactElement => {
  return (
    <div className={classes.layout}>
      <div className={classes.twoColumn}>
        <PreviewHeader profile={profile} invoice={invoice} />
      </div>
      <PreviewMyInfo profile={profile} />
      <PreviewCompanyInfo invoice={invoice} />
      <div className={classes.twoColumn}>
        <PreviewInfo />
      </div>
      <div className={classes.twoColumn}>
        <PreviewTable />
      </div>
      <div className={classes.twoColumn}>
        <PreviewSummary />
      </div>
      <div className={classes.twoColumn}>
        <PreviewNotes />
      </div>
    </div>
  );
};
