import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { Reports } from "./Reports";

export default {
  title: "pages/Reports",
  component: Reports,
};

type Props = ComponentProps<typeof Reports>;

const ReportsStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Reports {...props} />
    </TestWrapper>
  );
};

export const Playground = ReportsStory.bind({});
Playground.args = { wrapperProps: {} };
