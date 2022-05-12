import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { Reports } from "./Reports";

export default {
  title: "pages/Reports",
  component: Reports,
} as ComponentMeta<typeof Reports>;

type Props = ComponentProps<typeof Reports>;

const ReportsStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Reports {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof ReportsStory> = ReportsStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
