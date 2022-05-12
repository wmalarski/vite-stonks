import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { RemoveInvoice } from "./RemoveInvoice";

export default {
  title: "modules/RemoveInvoice",
  component: RemoveInvoice,
} as ComponentMeta<typeof RemoveInvoice>;

type Props = ComponentProps<typeof RemoveInvoice>;

const RemoveInvoiceStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <RemoveInvoice {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof RemoveInvoiceStory> = RemoveInvoiceStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
