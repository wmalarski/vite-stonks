import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { Header } from "./Header";

export default {
  title: "pages/Home/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

type Props = ComponentProps<typeof Header>;

const HeaderStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Header {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof HeaderStory> = HeaderStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
