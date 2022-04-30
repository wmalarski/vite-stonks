import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { ErrorView } from "./ErrorView";

export default {
  title: "components/ErrorView",
  component: ErrorView
};

type Props = ComponentProps<typeof ErrorView>;

const ErrorViewStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <ErrorView {...props} />
    </TestWrapper>
  );
};

export const Playground = ErrorViewStory.bind({});
Playground.args = { wrapperProps: {} };
