import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { Settings } from "./Settings";

export default {
  title: "pages/Settings",
  component: Settings,
} as ComponentMeta<typeof Settings>;

type Props = ComponentProps<typeof Settings>;

const SettingsStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Settings {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof SettingsStory> = SettingsStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
