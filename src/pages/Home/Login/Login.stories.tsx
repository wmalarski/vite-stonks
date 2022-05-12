import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { Login } from "./Login";

export default {
  title: "pages/Login",
  component: Login,
} as ComponentMeta<typeof Login>;

type Props = ComponentProps<typeof Login>;

const LoginStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Login {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof LoginStory> = LoginStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
