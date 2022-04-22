import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { CreateInvoice } from "./CreateInvoice";

export default {
  title: "modules/SheetHeader/CreateInvoice",
  component: CreateInvoice,
};

type Props = ComponentProps<typeof CreateInvoice>;

const CreateInvoiceStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CreateInvoice {...props} />
    </TestWrapper>
  );
};

export const Playground = CreateInvoiceStory.bind({});
Playground.args = { wrapperProps: {} };
