import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { EditCompany } from "./EditCompany";

export default {
  title: "pages/Companies/CompaniesTable/CompanyActions/EditCompany",
  component: EditCompany,
};

type Props = ComponentProps<typeof EditCompany>;

const EditCompanyStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <EditCompany {...props} />
    </TestWrapper>
  );
};

export const Playground = EditCompanyStory.bind({});
Playground.args = { wrapperProps: {} };
