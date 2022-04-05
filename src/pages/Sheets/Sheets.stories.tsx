import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { Sheets } from "./Sheets";

export default {
  title: "pages/Home/Sheets",
  component: Sheets,
};

type Props = ComponentProps<typeof Sheets>;

const SheetsStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Sheets {...props} />
    </TestWrapper>
  );
};

export const Playground = SheetsStory.bind({});
Playground.args = { wrapperProps: {} };
