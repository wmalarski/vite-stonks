import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { RemoveCompany } from "./RemoveCompany";

export default {
  title: "pages/Companies/CompaniesTable/CompanyActions/RemoveCompany",
  component: RemoveCompany,
} as ComponentMeta<typeof RemoveCompany>;

type Props = ComponentProps<typeof RemoveCompany>;

const RemoveCompanyStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <RemoveCompany {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof RemoveCompanyStory> = RemoveCompanyStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
