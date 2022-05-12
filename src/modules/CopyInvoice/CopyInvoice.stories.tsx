import { mockInvoice, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { CopyInvoice } from "./CopyInvoice";

export default {
  title: "modules/CopyInvoice",
  component: CopyInvoice,
} as ComponentMeta<typeof CopyInvoice>;

type Props = ComponentProps<typeof CopyInvoice>;

const CopyInvoiceStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CopyInvoice {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof CopyInvoiceStory> = CopyInvoiceStory;
export const Playground = Story.bind({});
Playground.args = {
  wrapperProps: {},
  invoice: mockInvoice(),
  sheet: mockSheet(),
};
