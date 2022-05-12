import { mockInvoice } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { PreviewCompanyInfo } from "./PreviewCompanyInfo";

export default {
  title: "modules/InvoicePreview/PreviewCompanyInfo",
  component: PreviewCompanyInfo,
} as ComponentMeta<typeof PreviewCompanyInfo>;

type Props = ComponentProps<typeof PreviewCompanyInfo>;

const PreviewCompanyInfoStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <PreviewCompanyInfo {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof PreviewCompanyInfoStory> =
  PreviewCompanyInfoStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {}, invoice: mockInvoice() };
