import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { Sheet } from "./Sheet";

export default {
  title: "pages/Sheet",
  component: Sheet
};

type Props = ComponentProps<typeof Sheet>;

const SheetStory = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Sheet {...props} />
    </TestWrapper>
  );
};

export const Playground = SheetStory.bind({});
Playground.args = { wrapperProps: {} };
