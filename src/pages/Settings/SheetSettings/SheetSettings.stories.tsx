import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { SheetSettings } from "./SheetSettings";

export default {
  title: "pages/Settings/SheetSettings",
  component: SheetSettings,
} as ComponentMeta<typeof SheetSettings>;

type Props = ComponentProps<typeof SheetSettings>;

const SheetSettingsStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SheetSettings {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof SheetSettingsStory> = SheetSettingsStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
