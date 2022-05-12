import { mockInvoice, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { InvoicePreview } from "./InvoicePreview";

export default {
  title: "modules/InvoicePreview",
  component: InvoicePreview,
} as ComponentMeta<typeof InvoicePreview>;

type Props = ComponentProps<typeof InvoicePreview>;

const InvoicePreviewStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <InvoicePreview {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof InvoicePreviewStory> = InvoicePreviewStory;
export const Playground = Story.bind({});
Playground.args = {
  wrapperProps: {},
  sheet: mockSheet(),
  invoice: mockInvoice(),
};
