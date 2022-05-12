import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { CompanyAutoComplete } from "./CompanyAutoComplete";

export default {
  title: "modules/InvoiceForm/CompanyAutoComplete",
  component: CompanyAutoComplete,
} as ComponentMeta<typeof CompanyAutoComplete>;

type Props = ComponentProps<typeof CompanyAutoComplete>;

const CompanyAutoCompleteStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CompanyAutoComplete {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof CompanyAutoCompleteStory> =
  CompanyAutoCompleteStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {}, sheet: mockSheet() };
