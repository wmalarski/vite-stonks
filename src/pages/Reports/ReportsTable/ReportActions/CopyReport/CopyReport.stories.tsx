import { mockReport, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { CopyReport } from "./CopyReport";

export default {
  title: "pages/Reports/ReportsTable/ReportActions/CopyReport",
  component: CopyReport,
} as ComponentMeta<typeof CopyReport>;

type Props = ComponentProps<typeof CopyReport>;

const CopyReportStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CopyReport {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof CopyReportStory> = CopyReportStory;
export const Playground = Story.bind({});
Playground.args = {
  wrapperProps: {},
  report: mockReport(),
  sheet: mockSheet(),
};
