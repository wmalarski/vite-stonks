import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { Loading } from "./Loading";

export default {
  title: "pages/Home/Loading",
  component: Loading
};

type Props = ComponentProps<typeof Loading>;

const LoadingStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Loading {...props} />
    </TestWrapper>
  );
};

export const Playground = LoadingStory.bind({});
Playground.args = { wrapperProps: {} };
