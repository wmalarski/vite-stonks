import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { CreateSheetForm } from "./SheetForm";

export default {
  title: "pages/Sheets/CreateSheet/CreateSheetForm",
  component: CreateSheetForm,
};

type Props = ComponentProps<typeof CreateSheetForm>;

const CreateSheetFormStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CreateSheetForm {...props} />
    </TestWrapper>
  );
};

export const Playground = CreateSheetFormStory.bind({});
Playground.args = { wrapperProps: {} };
