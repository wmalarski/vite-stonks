import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { EditSheet } from "./EditSheet";

export default {
  title: "modules/EditSheet",
  component: EditSheet,
} as ComponentMeta<typeof EditSheet>;

type Props = ComponentProps<typeof EditSheet>;

const EditSheetStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <EditSheet {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof EditSheetStory> = EditSheetStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {}, sheet: mockSheet() };
