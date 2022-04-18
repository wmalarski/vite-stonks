import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { PreviewMyInfo } from "./PreviewMyInfo";

export default {
  title: "modules/InvoicePreview/PreviewMyInfo",
  component: PreviewMyInfo
};

type Props = ComponentProps<typeof PreviewMyInfo>;

const PreviewMyInfoStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <PreviewMyInfo {...props} />
    </TestWrapper>
  );
};

export const Playground = PreviewMyInfoStory.bind({});
Playground.args = { wrapperProps: {} };
