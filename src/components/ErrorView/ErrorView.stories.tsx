import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { ErrorView } from "./ErrorView";

export default {
  title: "components/ErrorView",
  component: ErrorView,
} as ComponentMeta<typeof ErrorView>;

type Props = ComponentProps<typeof ErrorView>;

const ErrorViewStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <ErrorView {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof ErrorViewStory> = ErrorViewStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
