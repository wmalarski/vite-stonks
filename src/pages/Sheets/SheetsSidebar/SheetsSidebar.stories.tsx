import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { SheetsSidebar } from "./SheetsSidebar";

export default {
  title: "pages/SheetsSidebar",
  component: SheetsSidebar,
} as ComponentMeta<typeof SheetsSidebar>;

type Props = ComponentProps<typeof SheetsSidebar>;

const SheetsSidebarStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SheetsSidebar {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof SheetsSidebarStory> = SheetsSidebarStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
