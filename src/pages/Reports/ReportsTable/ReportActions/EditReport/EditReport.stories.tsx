import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { EditReport } from "./EditReport";

export default {
  title: "pages/Reports/ReportsTable/ReportActions/EditReport",
  component: EditReport,
} as ComponentMeta<typeof EditReport>;

type Props = ComponentProps<typeof EditReport>;

const EditReportStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <EditReport {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof EditReportStory> = EditReportStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
