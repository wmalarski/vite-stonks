import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { CompanyAutoComplete } from "./CompanyAutoComplete";

export default {
  title: "components/InvoiceForm/CompanyAutoComplete",
  component: CompanyAutoComplete,
};

type Props = ComponentProps<typeof CompanyAutoComplete>;

const CompanyAutoCompleteStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CompanyAutoComplete {...props} />
    </TestWrapper>
  );
};

export const Playground = CompanyAutoCompleteStory.bind({});
Playground.args = { wrapperProps: {} };
