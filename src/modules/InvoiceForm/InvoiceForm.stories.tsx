import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { InvoiceForm } from "./InvoiceForm";

export default {
  title: "modules/InvoiceForm",
  component: InvoiceForm,
} as ComponentMeta<typeof InvoiceForm>;

type Props = ComponentProps<typeof InvoiceForm>;

const InvoiceFormStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <InvoiceForm {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof InvoiceFormStory> = InvoiceFormStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
