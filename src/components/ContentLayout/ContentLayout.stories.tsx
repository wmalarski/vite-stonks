import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { ContentLayout } from "./ContentLayout";

export default {
  title: "components/ContentLayout",
  component: ContentLayout,
};

type Props = ComponentProps<typeof ContentLayout>;

const ContentLayoutStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <ContentLayout {...props} />
    </TestWrapper>
  );
};

export const Playground = ContentLayoutStory.bind({});
Playground.args = { wrapperProps: {} };
