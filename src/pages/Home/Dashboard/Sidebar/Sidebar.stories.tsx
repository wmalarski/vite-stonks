import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { Sidebar } from "./Sidebar";

export default {
  title: "pages/Home/Dashboard/Sidebar",
  component: Sidebar
};

type Props = ComponentProps<typeof Sidebar>;

const SidebarStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Sidebar {...props} />
    </TestWrapper>
  );
};

export const Playground = SidebarStory.bind({});
Playground.args = { wrapperProps: {} };
