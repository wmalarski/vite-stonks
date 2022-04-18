import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { PreviewHeader } from "./PreviewHeader";

export default {
  title: "modules/InvoicePreview/PreviewHeader",
  component: PreviewHeader
};

type Props = ComponentProps<typeof PreviewHeader>;

const PreviewHeaderStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <PreviewHeader {...props} />
    </TestWrapper>
  );
};

export const Playground = PreviewHeaderStory.bind({});
Playground.args = { wrapperProps: {} };
