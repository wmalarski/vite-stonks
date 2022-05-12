import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { CreateSheet } from "./CreateSheet";

export default {
  title: "pages/Sheets/CreateSheet",
  component: CreateSheet,
} as ComponentMeta<typeof CreateSheet>;

type Props = ComponentProps<typeof CreateSheet>;

const CreateSheetStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CreateSheet {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof CreateSheetStory> = CreateSheetStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
