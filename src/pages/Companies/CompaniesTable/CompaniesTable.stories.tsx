import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { CompaniesTable } from "./CompaniesTable";

export default {
  title: "pages/Companies/CompaniesTable",
  component: CompaniesTable,
} as ComponentMeta<typeof CompaniesTable>;

type Props = ComponentProps<typeof CompaniesTable>;

const CompaniesTableStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CompaniesTable {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof CompaniesTableStory> = CompaniesTableStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {}, sheet: mockSheet() };
