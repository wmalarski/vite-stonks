import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { CreateCompany } from "./CreateCompany";

export default {
  title: "modules/SheetHeader/CreateCompany",
  component: CreateCompany,
} as ComponentMeta<typeof CreateCompany>;

type Props = ComponentProps<typeof CreateCompany>;

const CreateCompanyStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CreateCompany {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof CreateCompanyStory> = CreateCompanyStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
