import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { CreateReport } from "./CreateReport";

export default {
  title: "modules/SheetHeader/CreateReport",
  component: CreateReport,
};

type Props = ComponentProps<typeof CreateReport>;

const CreateReportStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CreateReport {...props} />
    </TestWrapper>
  );
};

export const Playground = CreateReportStory.bind({});
Playground.args = { wrapperProps: {} };
