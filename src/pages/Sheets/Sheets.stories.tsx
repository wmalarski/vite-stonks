import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { Sheets } from "./Sheets";

export default {
  title: "pages/Home/Sheets",
  component: Sheets,
} as ComponentMeta<typeof Sheets>;

type Props = ComponentProps<typeof Sheets>;

const SheetsStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Sheets {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof SheetsStory> = SheetsStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
