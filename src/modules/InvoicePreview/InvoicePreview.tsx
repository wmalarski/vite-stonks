import { Invoice } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
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
  sheet: Sheet;
  invoice: Invoice;
};

export const InvoicePreview = ({ sheet, invoice }: Props): ReactElement => {
  return (
    <div className={classes.layout}>
      <Row>
        <Col span={24}>
          <PreviewHeader sheet={sheet} invoice={invoice} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <PreviewMyInfo sheet={sheet} />
        </Col>
        <Col span={12}>
          <PreviewCompanyInfo invoice={invoice} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PreviewInfo invoice={invoice} sheet={sheet} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PreviewTable invoice={invoice} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PreviewSummary invoice={invoice} />
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
