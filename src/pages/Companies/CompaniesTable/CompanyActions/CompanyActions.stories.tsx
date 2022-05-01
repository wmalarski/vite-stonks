import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { CompanyActions } from "./CompanyActions";

export default {
  title: "pages/Companies/CompaniesTable/CompanyActions",
  component: CompanyActions
};

type Props = ComponentProps<typeof CompanyActions>;

const CompanyActionsStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CompanyActions {...props} />
    </TestWrapper>
  );
};

export const Playground = CompanyActionsStory.bind({});
Playground.args = { wrapperProps: {} };
