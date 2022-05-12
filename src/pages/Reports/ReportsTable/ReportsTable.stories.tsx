import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { ReportsTable } from "./ReportsTable";

export default {
  title: "pages/Reports/ReportsTable",
  component: ReportsTable,
} as ComponentMeta<typeof ReportsTable>;

type Props = ComponentProps<typeof ReportsTable>;

const ReportsTableStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <ReportsTable {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof ReportsTableStory> = ReportsTableStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
