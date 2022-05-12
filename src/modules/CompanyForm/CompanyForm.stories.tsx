import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { CompanyForm } from "./CompanyForm";

export default {
  title: "modules/CompanyForm",
  component: CompanyForm,
} as ComponentMeta<typeof CompanyForm>;

type Props = ComponentProps<typeof CompanyForm>;

const CompanyFormStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CompanyForm {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof CompanyFormStory> = CompanyFormStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
