import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { ReportActions } from "./ReportActions";

export default {
  title: "pages/Reports/ReportsTable/ReportActions",
  component: ReportActions,
};

type Props = ComponentProps<typeof ReportActions>;

const ReportActionsStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <ReportActions {...props} />
    </TestWrapper>
  );
};

export const Playground = ReportActionsStory.bind({});
Playground.args = { wrapperProps: {} };
