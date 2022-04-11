import { mockDoc } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { RemoveSheet } from "./RemoveSheet";

export default {
  title: "modules/RemoveSheet",
  component: RemoveSheet,
};

type Props = ComponentProps<typeof RemoveSheet>;

const RemoveSheetStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <RemoveSheet {...props} />
    </TestWrapper>
  );
};

export const Playground = RemoveSheetStory.bind({});
Playground.args = { wrapperProps: {}, doc: mockDoc() };
