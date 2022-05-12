import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { RemoveSheet } from "./RemoveSheet";

export default {
  title: "modules/RemoveSheet",
  component: RemoveSheet,
} as ComponentMeta<typeof RemoveSheet>;

type Props = ComponentProps<typeof RemoveSheet>;

const RemoveSheetStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <RemoveSheet {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof RemoveSheetStory> = RemoveSheetStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {}, sheet: mockSheet() };
