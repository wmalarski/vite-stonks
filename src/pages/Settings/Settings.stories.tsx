import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { Settings } from "./Settings";

export default {
  title: "pages/Settings",
  component: Settings,
};

type Props = ComponentProps<typeof Settings>;

const SettingsStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Settings {...props} />
    </TestWrapper>
  );
};

export const Playground = SettingsStory.bind({});
Playground.args = { wrapperProps: {} };
