import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { HeaderBreadcrumb } from "./HeaderBreadcrumb";

export default {
  title: "pages/Home/Header/HeaderBreadcrumb",
  component: HeaderBreadcrumb,
};

type Props = ComponentProps<typeof HeaderBreadcrumb>;

const HeaderBreadcrumbStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <HeaderBreadcrumb {...props} />
    </TestWrapper>
  );
};

export const Playground = HeaderBreadcrumbStory.bind({});
Playground.args = { wrapperProps: {} };
