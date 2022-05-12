import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { CreateReport } from "./CreateReport";

export default {
  title: "modules/SheetHeader/CreateReport",
  component: CreateReport,
} as ComponentMeta<typeof CreateReport>;

type Props = ComponentProps<typeof CreateReport>;

const CreateReportStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CreateReport {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof CreateReportStory> = CreateReportStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
