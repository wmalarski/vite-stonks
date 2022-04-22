import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { PreviewInfo } from "./PreviewInfo";

export default {
  title: "modules/InvoicePreview/PreviewInfo",
  component: PreviewInfo,
};

type Props = ComponentProps<typeof PreviewInfo>;

const PreviewInfoStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <PreviewInfo {...props} />
    </TestWrapper>
  );
};

export const Playground = PreviewInfoStory.bind({});
Playground.args = { wrapperProps: {} };
