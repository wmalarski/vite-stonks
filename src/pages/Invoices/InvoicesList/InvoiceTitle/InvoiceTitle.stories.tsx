import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { InvoiceTitle } from "./InvoiceTitle";

export default {
  title: "pages/Invoices/InvoicesList/InvoiceTitle",
  component: InvoiceTitle,
};

type Props = ComponentProps<typeof InvoiceTitle>;

const InvoiceTitleStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <InvoiceTitle {...props} />
    </TestWrapper>
  );
};

export const Playground = InvoiceTitleStory.bind({});
Playground.args = { wrapperProps: {} };
