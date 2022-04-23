import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { SheetSettingsForm } from "./SheetSettingsForm";

export default {
  title: "pages/Settings/SheetSettings/SheetSettingsForm",
  component: SheetSettingsForm,
};

type Props = ComponentProps<typeof SheetSettingsForm>;

const SheetSettingsFormStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SheetSettingsForm {...props} />
    </TestWrapper>
  );
};

export const Playground = SheetSettingsFormStory.bind({});
Playground.args = { wrapperProps: {} };
