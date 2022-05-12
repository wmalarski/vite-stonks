import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { EditInvoice } from "./EditInvoice";

export default {
  title: "modules/EditInvoice",
  component: EditInvoice,
} as ComponentMeta<typeof EditInvoice>;

type Props = ComponentProps<typeof EditInvoice>;

const EditInvoiceStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <EditInvoice {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof EditInvoiceStory> = EditInvoiceStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
