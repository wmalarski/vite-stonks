import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { CompaniesTable } from "./CompaniesTable";

export default {
  title: "pages/Companies/CompaniesTable",
  component: CompaniesTable
};

type Props = ComponentProps<typeof CompaniesTable>;

const CompaniesTableStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CompaniesTable {...props} />
    </TestWrapper>
  );
};

export const Playground = CompaniesTableStory.bind({});
Playground.args = { wrapperProps: {} };
