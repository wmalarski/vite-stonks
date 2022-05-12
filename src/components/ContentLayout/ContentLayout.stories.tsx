import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { ContentLayout } from "./ContentLayout";

export default {
  title: "components/ContentLayout",
  component: ContentLayout,
} as ComponentMeta<typeof ContentLayout>;

type Props = ComponentProps<typeof ContentLayout>;

const ContentLayoutStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <ContentLayout {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof ContentLayoutStory> = ContentLayoutStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
