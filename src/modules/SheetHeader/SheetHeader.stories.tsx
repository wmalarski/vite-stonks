import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { SheetHeader } from "./SheetHeader";

export default {
  title: "modules/SheetHeader",
  component: SheetHeader,
} as ComponentMeta<typeof SheetHeader>;

type Props = ComponentProps<typeof SheetHeader>;

const SheetHeaderStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SheetHeader {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof SheetHeaderStory> = SheetHeaderStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {}, sheet: mockSheet() };
