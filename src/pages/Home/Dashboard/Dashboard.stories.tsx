import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { Dashboard } from "./Dashboard";

export default {
  title: "pages/Home/Dashboard",
  component: Dashboard,
};

type Props = ComponentProps<typeof Dashboard>;

const DashboardStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Dashboard {...props} />
    </TestWrapper>
  );
};

export const Playground = DashboardStory.bind({});
Playground.args = { wrapperProps: {} };
