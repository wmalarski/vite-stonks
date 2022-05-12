import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { PreviewInfo } from "./PreviewInfo";

export default {
  title: "modules/InvoicePreview/PreviewInfo",
  component: PreviewInfo,
} as ComponentMeta<typeof PreviewInfo>;

type Props = ComponentProps<typeof PreviewInfo>;

const PreviewInfoStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <PreviewInfo {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof PreviewInfoStory> = PreviewInfoStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
