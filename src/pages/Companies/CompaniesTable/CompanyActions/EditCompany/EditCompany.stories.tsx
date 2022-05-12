import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { EditCompany } from "./EditCompany";

export default {
  title: "pages/Companies/CompaniesTable/CompanyActions/EditCompany",
  component: EditCompany,
} as ComponentMeta<typeof EditCompany>;

type Props = ComponentProps<typeof EditCompany>;

const EditCompanyStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <EditCompany {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof EditCompanyStory> = EditCompanyStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
