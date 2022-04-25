import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { RemoveReport } from "./RemoveReport";

export default {
  title: "pages/Reports/ReportsTable/ReportActions/RemoveReport",
  component: RemoveReport
};

type Props = ComponentProps<typeof RemoveReport>;

const RemoveReportStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <RemoveReport {...props} />
    </TestWrapper>
  );
};

export const Playground = RemoveReportStory.bind({});
Playground.args = { wrapperProps: {} };
