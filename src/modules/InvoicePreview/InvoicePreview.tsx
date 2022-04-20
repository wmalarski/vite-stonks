import { Invoice } from "@/services/InvoiceApi";
import { Profile } from "@/services/ProfileApi";
import { Col, Row } from "antd";
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
      <Row>
        <Col span={24}>
          <PreviewHeader profile={profile} invoice={invoice} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <PreviewMyInfo profile={profile} />
        </Col>
        <Col span={12}>
          <PreviewCompanyInfo invoice={invoice} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PreviewInfo invoice={invoice} profile={profile} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PreviewTable />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PreviewSummary />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PreviewNotes />
        </Col>
      </Row>
    </div>
  );
};
