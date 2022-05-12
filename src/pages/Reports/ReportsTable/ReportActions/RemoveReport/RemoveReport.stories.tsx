import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { RemoveReport } from "./RemoveReport";

export default {
  title: "pages/Reports/ReportsTable/ReportActions/RemoveReport",
  component: RemoveReport,
} as ComponentMeta<typeof RemoveReport>;

type Props = ComponentProps<typeof RemoveReport>;

const RemoveReportStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <RemoveReport {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof RemoveReportStory> = RemoveReportStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
