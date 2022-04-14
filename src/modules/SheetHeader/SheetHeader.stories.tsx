import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { SheetHeader } from "./SheetHeader";

export default {
  title: "modules/SheetHeader",
  component: SheetHeader,
};

type Props = ComponentProps<typeof SheetHeader>;

const SheetHeaderStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SheetHeader {...props} />
    </TestWrapper>
  );
};

export const Playground = SheetHeaderStory.bind({});
Playground.args = { wrapperProps: {} };
