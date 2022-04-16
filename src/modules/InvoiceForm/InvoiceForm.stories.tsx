import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { InvoiceForm } from "./InvoiceForm";

export default {
  title: "modules/InvoiceForm",
  component: InvoiceForm
};

type Props = ComponentProps<typeof InvoiceForm>;

const InvoiceFormStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <InvoiceForm {...props} />
    </TestWrapper>
  );
};

export const Playground = InvoiceFormStory.bind({});
Playground.args = { wrapperProps: {} };
