import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { RemoveCompany } from "./RemoveCompany";

export default {
  title: "pages/Companies/CompaniesTable/CompanyActions/RemoveCompany",
  component: RemoveCompany,
};

type Props = ComponentProps<typeof RemoveCompany>;

const RemoveCompanyStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <RemoveCompany {...props} />
    </TestWrapper>
  );
};

export const Playground = RemoveCompanyStory.bind({});
Playground.args = { wrapperProps: {} };
