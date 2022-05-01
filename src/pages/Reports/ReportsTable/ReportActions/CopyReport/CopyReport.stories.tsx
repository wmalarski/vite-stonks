import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { CopyReport } from "./CopyReport";

export default {
  title: "pages/Reports/ReportsTable/ReportActions/CopyReport",
  component: CopyReport,
};

type Props = ComponentProps<typeof CopyReport>;

const CopyReportStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CopyReport {...props} />
    </TestWrapper>
  );
};

export const Playground = CopyReportStory.bind({});
Playground.args = { wrapperProps: {} };
