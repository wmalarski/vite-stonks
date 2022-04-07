import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { CreateSheet } from "./CreateSheet";

export default {
  title: "pages/Sheets/CreateSheet",
  component: CreateSheet
};

type Props = ComponentProps<typeof CreateSheet>;

const CreateSheetStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CreateSheet {...props} />
    </TestWrapper>
  );
};

export const Playground = CreateSheetStory.bind({});
Playground.args = { wrapperProps: {} };
