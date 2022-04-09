import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { Invoices } from "./Invoices";

export default {
  title: "pages/Invoices",
  component: Invoices
};

type Props = ComponentProps<typeof Invoices>;

const InvoicesStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Invoices {...props} />
    </TestWrapper>
  );
};

export const Playground = InvoicesStory.bind({});
Playground.args = { wrapperProps: {} };
