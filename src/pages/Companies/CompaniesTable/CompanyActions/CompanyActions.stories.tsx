import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { CompanyActions } from "./CompanyActions";

export default {
  title: "pages/Companies/CompaniesTable/CompanyActions",
  component: CompanyActions,
} as ComponentMeta<typeof CompanyActions>;

type Props = ComponentProps<typeof CompanyActions>;

const CompanyActionsStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CompanyActions {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof CompanyActionsStory> = CompanyActionsStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
