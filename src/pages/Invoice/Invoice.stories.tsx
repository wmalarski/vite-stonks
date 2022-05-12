import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { Invoice } from "./Invoice";

export default {
  title: "pages/Invoice",
  component: Invoice,
} as ComponentMeta<typeof Invoice>;

type Props = ComponentProps<typeof Invoice>;

const InvoiceStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Invoice {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof InvoiceStory> = InvoiceStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
