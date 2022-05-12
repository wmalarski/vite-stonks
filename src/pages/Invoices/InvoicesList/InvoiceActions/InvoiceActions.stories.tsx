import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { InvoiceActions } from "./InvoiceActions";

export default {
  title: "pages/Invoices/InvoicesList/InvoiceActions",
  component: InvoiceActions,
} as ComponentMeta<typeof InvoiceActions>;

type Props = ComponentProps<typeof InvoiceActions>;

const InvoiceActionsStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <InvoiceActions {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof InvoiceActionsStory> = InvoiceActionsStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
