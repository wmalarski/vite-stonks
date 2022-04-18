import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { PreviewSummary } from "./PreviewSummary";

export default {
  title: "modules/InvoicePreview/PreviewSummary",
  component: PreviewSummary
};

type Props = ComponentProps<typeof PreviewSummary>;

const PreviewSummaryStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <PreviewSummary {...props} />
    </TestWrapper>
  );
};

export const Playground = PreviewSummaryStory.bind({});
Playground.args = { wrapperProps: {} };
