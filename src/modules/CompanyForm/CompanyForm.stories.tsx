import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { CompanyForm } from "./CompanyForm";

export default {
  title: "modules/CompanyForm",
  component: CompanyForm,
};

type Props = ComponentProps<typeof CompanyForm>;

const CompanyFormStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CompanyForm {...props} />
    </TestWrapper>
  );
};

export const Playground = CompanyFormStory.bind({});
Playground.args = { wrapperProps: {} };
