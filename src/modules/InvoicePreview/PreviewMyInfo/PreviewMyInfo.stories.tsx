import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { PreviewMyInfo } from "./PreviewMyInfo";

export default {
  title: "modules/InvoicePreview/PreviewMyInfo",
  component: PreviewMyInfo,
} as ComponentMeta<typeof PreviewMyInfo>;

type Props = ComponentProps<typeof PreviewMyInfo>;

const PreviewMyInfoStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <PreviewMyInfo {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof PreviewMyInfoStory> = PreviewMyInfoStory;
export const Playground = Story.bind({});
Playground.args = {
  wrapperProps: {},
  sheet: mockSheet(),
};
