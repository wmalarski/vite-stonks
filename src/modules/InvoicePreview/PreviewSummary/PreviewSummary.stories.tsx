import { mockInvoice } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { PreviewSummary } from "./PreviewSummary";

export default {
  title: "modules/InvoicePreview/PreviewSummary",
  component: PreviewSummary,
} as ComponentMeta<typeof PreviewSummary>;

type Props = ComponentProps<typeof PreviewSummary>;

const PreviewSummaryStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <PreviewSummary {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof PreviewSummaryStory> = PreviewSummaryStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {}, invoice: mockInvoice() };
