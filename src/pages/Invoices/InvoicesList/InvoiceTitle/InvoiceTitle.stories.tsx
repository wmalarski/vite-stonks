import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { InvoiceTitle } from "./InvoiceTitle";

export default {
  title: "pages/Invoices/InvoicesList/InvoiceTitle",
  component: InvoiceTitle,
} as ComponentMeta<typeof InvoiceTitle>;

type Props = ComponentProps<typeof InvoiceTitle>;

const InvoiceTitleStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <InvoiceTitle {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof InvoiceTitleStory> = InvoiceTitleStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
