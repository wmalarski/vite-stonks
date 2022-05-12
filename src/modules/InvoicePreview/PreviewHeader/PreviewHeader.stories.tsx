import { mockInvoice, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { PreviewHeader } from "./PreviewHeader";

export default {
  title: "modules/InvoicePreview/PreviewHeader",
  component: PreviewHeader,
} as ComponentMeta<typeof PreviewHeader>;

type Props = ComponentProps<typeof PreviewHeader>;

const PreviewHeaderStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <PreviewHeader {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof PreviewHeaderStory> = PreviewHeaderStory;
export const Playground = Story.bind({});
Playground.args = {
  wrapperProps: {},
  invoice: mockInvoice(),
  sheet: mockSheet(),
};
