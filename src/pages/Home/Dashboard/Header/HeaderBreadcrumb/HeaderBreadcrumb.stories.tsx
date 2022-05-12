import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { HeaderBreadcrumb } from "./HeaderBreadcrumb";

export default {
  title: "pages/Home/Header/HeaderBreadcrumb",
  component: HeaderBreadcrumb,
} as ComponentMeta<typeof HeaderBreadcrumb>;

type Props = ComponentProps<typeof HeaderBreadcrumb>;

const HeaderBreadcrumbStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <HeaderBreadcrumb {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof HeaderBreadcrumbStory> =
  HeaderBreadcrumbStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
