import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { Loading } from "./Loading";

export default {
  title: "pages/Home/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

type Props = ComponentProps<typeof Loading>;

const LoadingStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Loading {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof LoadingStory> = LoadingStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
