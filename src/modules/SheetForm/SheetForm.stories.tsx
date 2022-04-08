import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { SheetForm } from "./SheetForm";

export default {
  title: "pages/Sheets/CreateSheet/CreateSheetForm",
  component: SheetForm,
};

type Props = ComponentProps<typeof SheetForm>;

const CreateSheetFormStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SheetForm {...props} />
    </TestWrapper>
  );
};

export const Playground = CreateSheetFormStory.bind({});
Playground.args = { wrapperProps: {} };
