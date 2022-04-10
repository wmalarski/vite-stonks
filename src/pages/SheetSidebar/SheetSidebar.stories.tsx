import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { SheetSidebar } from "./SheetSidebar";

export default {
  title: "pages/SheetSidebar",
  component: SheetSidebar,
};

type Props = ComponentProps<typeof SheetSidebar>;

const SheetSidebarStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SheetSidebar {...props} />
    </TestWrapper>
  );
};

export const Playground = SheetSidebarStory.bind({});
Playground.args = { wrapperProps: {}, sheetId: mockSheet.id };
