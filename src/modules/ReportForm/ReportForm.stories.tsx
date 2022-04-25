import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { ReportForm } from "./ReportForm";

export default {
  title: "modules/ReportForm",
  component: ReportForm
};

type Props = ComponentProps<typeof ReportForm>;

const ReportFormStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <ReportForm {...props} />
    </TestWrapper>
  );
};

export const Playground = ReportFormStory.bind({});
Playground.args = { wrapperProps: {} };
