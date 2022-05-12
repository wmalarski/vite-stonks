import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { InvoicesList } from "./InvoicesList";

export default {
  title: "pages/Invoices/InvoicesList",
  component: InvoicesList,
} as ComponentMeta<typeof InvoicesList>;

type Props = ComponentProps<typeof InvoicesList>;

const InvoicesListStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <InvoicesList {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof InvoicesListStory> = InvoicesListStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {}, sheet: mockSheet() };
