import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { SheetSidebar } from "./SheetSidebar";

export default {
  title: "pages/SheetSidebar",
  component: SheetSidebar,
} as ComponentMeta<typeof SheetSidebar>;

type Props = ComponentProps<typeof SheetSidebar>;

const SheetSidebarStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SheetSidebar {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof SheetSidebarStory> = SheetSidebarStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {}, sheetId: mockSheet().id };
