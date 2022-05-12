import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { SignOutButton } from "./SignOutButton";

export default {
  title: "modules/SignOutButton",
  component: SignOutButton,
} as ComponentMeta<typeof SignOutButton>;

type Props = ComponentProps<typeof SignOutButton>;

const SignOutButtonStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SignOutButton {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof SignOutButtonStory> = SignOutButtonStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
