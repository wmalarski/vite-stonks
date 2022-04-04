import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { Invoice } from "./Invoice";

export default {
  title: "pages/Invoice",
  component: Invoice
};

type Props = ComponentProps<typeof Invoice>;

const InvoiceStory = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Invoice {...props} />
    </TestWrapper>
  );
};

export const Playground = InvoiceStory.bind({});
Playground.args = { wrapperProps: {} };
