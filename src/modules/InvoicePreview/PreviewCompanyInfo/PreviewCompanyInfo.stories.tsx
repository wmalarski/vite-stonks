import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { PreviewCompanyInfo } from "./PreviewCompanyInfo";

export default {
  title: "modules/InvoicePreview/PreviewCompanyInfo",
  component: PreviewCompanyInfo,
};

type Props = ComponentProps<typeof PreviewCompanyInfo>;

const PreviewCompanyInfoStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <PreviewCompanyInfo {...props} />
    </TestWrapper>
  );
};

export const Playground = PreviewCompanyInfoStory.bind({});
Playground.args = { wrapperProps: {} };
