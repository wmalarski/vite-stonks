import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { EditReport } from "./EditReport";

export default {
  title: "pages/Reports/ReportsTable/ReportActions/EditReport",
  component: EditReport,
};

type Props = ComponentProps<typeof EditReport>;

const EditReportStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <EditReport {...props} />
    </TestWrapper>
  );
};

export const Playground = EditReportStory.bind({});
Playground.args = { wrapperProps: {} };
