import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { InvoicePreview } from "./InvoicePreview";

export default {
  title: "modules/InvoicePreview",
  component: InvoicePreview,
};

type Props = ComponentProps<typeof InvoicePreview>;

const InvoicePreviewStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <InvoicePreview {...props} />
    </TestWrapper>
  );
};

export const Playground = InvoicePreviewStory.bind({});
Playground.args = { wrapperProps: {} };
