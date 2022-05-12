import { mockInvoice } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { PreviewTable } from "./PreviewTable";

export default {
  title: "modules/InvoicePreview/PreviewTable",
  component: PreviewTable,
} as ComponentMeta<typeof PreviewTable>;

type Props = ComponentProps<typeof PreviewTable>;

const PreviewTableStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <PreviewTable {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof PreviewTableStory> = PreviewTableStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {}, invoice: mockInvoice() };
