import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { SheetSettings } from "./SheetSettings";

export default {
  title: "pages/Settings/SheetSettings",
  component: SheetSettings
};

type Props = ComponentProps<typeof SheetSettings>;

const SheetSettingsStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SheetSettings {...props} />
    </TestWrapper>
  );
};

export const Playground = SheetSettingsStory.bind({});
Playground.args = { wrapperProps: {} };
