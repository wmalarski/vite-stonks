import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { InvoiceActions } from "./InvoiceActions";

export default {
  title: "pages/Invoices/InvoicesList/InvoiceActions",
  component: InvoiceActions,
};

type Props = ComponentProps<typeof InvoiceActions>;

const InvoiceActionsStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <InvoiceActions {...props} />
    </TestWrapper>
  );
};

export const Playground = InvoiceActionsStory.bind({});
Playground.args = { wrapperProps: {} };
