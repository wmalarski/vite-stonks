import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { Login } from "./Login";

export default {
  title: "pages/Login",
  component: Login,
};

type Props = ComponentProps<typeof Login>;

const LoginStory: Story<Props> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Login {...props} />
    </TestWrapper>
  );
};

export const Playground = LoginStory.bind({});
Playground.args = { wrapperProps: {} };
