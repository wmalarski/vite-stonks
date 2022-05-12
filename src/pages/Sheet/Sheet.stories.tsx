import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { Sheet } from "./Sheet";

export default {
  title: "pages/Sheet",
  component: Sheet,
} as ComponentMeta<typeof Sheet>;

type Props = ComponentProps<typeof Sheet>;

const SheetStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Sheet {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof SheetStory> = SheetStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
