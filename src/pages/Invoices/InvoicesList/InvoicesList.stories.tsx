import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { InvoicesList } from "./InvoicesList";

export default {
  title: "pages/Invoices/InvoicesList",
  component: InvoicesList
};

type Props = ComponentProps<typeof InvoicesList>;

const InvoicesListStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <InvoicesList {...props} />
    </TestWrapper>
  );
};

export const Playground = InvoicesListStory.bind({});
Playground.args = { wrapperProps: {} };
