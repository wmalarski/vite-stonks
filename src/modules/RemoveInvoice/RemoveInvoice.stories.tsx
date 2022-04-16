import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { RemoveInvoice } from "./RemoveInvoice";

export default {
  title: "modules/RemoveInvoice",
  component: RemoveInvoice
};

type Props = ComponentProps<typeof RemoveInvoice>;

const RemoveInvoiceStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <RemoveInvoice {...props} />
    </TestWrapper>
  );
};

export const Playground = RemoveInvoiceStory.bind({});
Playground.args = { wrapperProps: {} };
