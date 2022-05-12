import { mockReport, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { ReportActions } from "./ReportActions";

export default {
  title: "pages/Reports/ReportsTable/ReportActions",
  component: ReportActions,
} as ComponentMeta<typeof ReportActions>;

type Props = ComponentProps<typeof ReportActions>;

const ReportActionsStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <ReportActions {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof ReportActionsStory> = ReportActionsStory;
export const Playground = Story.bind({});
Playground.args = {
  wrapperProps: {},
  report: mockReport(),
  sheet: mockSheet(),
};
