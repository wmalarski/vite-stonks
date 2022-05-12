import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { CreateInvoice } from "./CreateInvoice";

export default {
  title: "modules/SheetHeader/CreateInvoice",
  component: CreateInvoice,
} as ComponentMeta<typeof CreateInvoice>;

type Props = ComponentProps<typeof CreateInvoice>;

const CreateInvoiceStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CreateInvoice {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof CreateInvoiceStory> = CreateInvoiceStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
