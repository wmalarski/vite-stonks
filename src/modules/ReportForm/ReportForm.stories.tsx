import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { ReportForm } from "./ReportForm";

export default {
  title: "modules/ReportForm",
  component: ReportForm,
} as ComponentMeta<typeof ReportForm>;

type Props = ComponentProps<typeof ReportForm>;

const ReportFormStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <ReportForm {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof ReportFormStory> = ReportFormStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
