import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { PreviewNotes } from "./PreviewNotes";

export default {
  title: "modules/InvoicePreview/PreviewNotes",
  component: PreviewNotes,
} as ComponentMeta<typeof PreviewNotes>;

type Props = ComponentProps<typeof PreviewNotes>;

const PreviewNotesStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <PreviewNotes {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof PreviewNotesStory> = PreviewNotesStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
