import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { InvoiceDetails } from "./InvoiceDetails";

export default {
  title: "pages/Invoice/InvoiceDetails",
  component: InvoiceDetails,
} as ComponentMeta<typeof InvoiceDetails>;

type Props = ComponentProps<typeof InvoiceDetails>;

const InvoiceDetailsStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <InvoiceDetails {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof InvoiceDetailsStory> = InvoiceDetailsStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
