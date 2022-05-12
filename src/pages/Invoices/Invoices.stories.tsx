import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { Invoices } from "./Invoices";

export default {
  title: "pages/Invoices",
  component: Invoices,
} as ComponentMeta<typeof Invoices>;

type Props = ComponentProps<typeof Invoices>;

const InvoicesStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Invoices {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof InvoicesStory> = InvoicesStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
