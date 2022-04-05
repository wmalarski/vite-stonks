import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { Header } from "./Header";

export default {
  title: "pages/Home/Header",
  component: Header,
};

type Props = ComponentProps<typeof Header>;

const HeaderStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Header {...props} />
    </TestWrapper>
  );
};

export const Playground = HeaderStory.bind({});
Playground.args = { wrapperProps: {} };
