import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { EditInvoice } from "./EditInvoice";

export default {
  title: "modules/EditInvoice",
  component: EditInvoice
};

type Props = ComponentProps<typeof EditInvoice>;

const EditInvoiceStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <EditInvoice {...props} />
    </TestWrapper>
  );
};

export const Playground = EditInvoiceStory.bind({});
Playground.args = { wrapperProps: {} };
