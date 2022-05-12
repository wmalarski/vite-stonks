import { mockInvoice } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { InvoiceHeader } from "./InvoiceHeader";

export default {
  title: "pages/Invoice/InvoiceDetails/InvoiceHeader",
  component: InvoiceHeader,
} as ComponentMeta<typeof InvoiceHeader>;

type Props = ComponentProps<typeof InvoiceHeader>;

const InvoiceHeaderStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <InvoiceHeader {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof InvoiceHeaderStory> = InvoiceHeaderStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {}, invoice: mockInvoice() };
