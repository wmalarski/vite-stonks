import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { PreviewTable } from "./PreviewTable";

export default {
  title: "modules/InvoicePreview/PreviewTable",
  component: PreviewTable
};

type Props = ComponentProps<typeof PreviewTable>;

const PreviewTableStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <PreviewTable {...props} />
    </TestWrapper>
  );
};

export const Playground = PreviewTableStory.bind({});
Playground.args = { wrapperProps: {} };
