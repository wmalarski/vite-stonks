import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { SheetsSidebar } from "./SheetsSidebar";

export default {
  title: "pages/SheetsSidebar",
  component: SheetsSidebar
};

type Props = ComponentProps<typeof SheetsSidebar>;

const SheetsSidebarStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SheetsSidebar {...props} />
    </TestWrapper>
  );
};

export const Playground = SheetsSidebarStory.bind({});
Playground.args = { wrapperProps: {} };
