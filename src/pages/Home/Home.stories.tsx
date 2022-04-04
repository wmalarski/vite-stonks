import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { Home } from "./Home";

export default {
  title: "pages/Home",
  component: Home
};

type Props = ComponentProps<typeof Home>;

const HomeStory = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Home {...props} />
    </TestWrapper>
  );
};

export const Playground = HomeStory.bind({});
Playground.args = { wrapperProps: {} };
