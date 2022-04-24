import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { ReportsTable } from "./ReportsTable";

export default {
  title: "pages/Reports/ReportsTable",
  component: ReportsTable,
};

type Props = ComponentProps<typeof ReportsTable>;

const ReportsTableStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <ReportsTable {...props} />
    </TestWrapper>
  );
};

export const Playground = ReportsTableStory.bind({});
Playground.args = { wrapperProps: {} };
