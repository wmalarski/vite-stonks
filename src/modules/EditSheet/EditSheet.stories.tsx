import { mockDoc } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { EditSheet } from "./EditSheet";

export default {
  title: "modules/EditSheet",
  component: EditSheet,
};

type Props = ComponentProps<typeof EditSheet>;

const EditSheetStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <EditSheet {...props} />
    </TestWrapper>
  );
};

export const Playground = EditSheetStory.bind({});
Playground.args = { wrapperProps: {}, doc: mockDoc() };
