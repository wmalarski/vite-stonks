import { mockInvoice } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { InvoiceHeader } from "./InvoiceHeader";

export default {
  title: "pages/Invoice/InvoiceDetails/InvoiceHeader",
  component: InvoiceHeader,
};

type Props = ComponentProps<typeof InvoiceHeader>;

const InvoiceHeaderStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <InvoiceHeader {...props} />
    </TestWrapper>
  );
};

export const Playground = InvoiceHeaderStory.bind({});
Playground.args = { wrapperProps: {}, invoice: mockInvoice() };
