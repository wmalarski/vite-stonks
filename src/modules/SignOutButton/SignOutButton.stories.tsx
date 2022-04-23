import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { SignOutButton } from "./SignOutButton";

export default {
  title: "modules/SignOutButton",
  component: SignOutButton
};

type Props = ComponentProps<typeof SignOutButton>;

const SignOutButtonStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SignOutButton {...props} />
    </TestWrapper>
  );
};

export const Playground = SignOutButtonStory.bind({});
Playground.args = { wrapperProps: {} };
