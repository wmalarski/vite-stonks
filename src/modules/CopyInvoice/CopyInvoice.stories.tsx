import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { CopyInvoice } from "./CopyInvoice";

export default {
  title: "modules/CopyInvoice",
  component: CopyInvoice,
};

type Props = ComponentProps<typeof CopyInvoice>;

const CopyInvoiceStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CopyInvoice {...props} />
    </TestWrapper>
  );
};

export const Playground = CopyInvoiceStory.bind({});
Playground.args = { wrapperProps: {} };
