import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { PreviewNotes } from "./PreviewNotes";

export default {
  title: "modules/InvoicePreview/PreviewNotes",
  component: PreviewNotes,
};

type Props = ComponentProps<typeof PreviewNotes>;

const PreviewNotesStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <PreviewNotes {...props} />
    </TestWrapper>
  );
};

export const Playground = PreviewNotesStory.bind({});
Playground.args = { wrapperProps: {} };
