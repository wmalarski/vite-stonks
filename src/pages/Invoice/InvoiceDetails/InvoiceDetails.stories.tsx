import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { InvoiceDetails } from "./InvoiceDetails";

export default {
  title: "pages/Invoice/InvoiceDetails",
  component: InvoiceDetails
};

type Props = ComponentProps<typeof InvoiceDetails>;

const InvoiceDetailsStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <InvoiceDetails {...props} />
    </TestWrapper>
  );
};

export const Playground = InvoiceDetailsStory.bind({});
Playground.args = { wrapperProps: {} };
