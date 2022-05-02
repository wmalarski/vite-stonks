import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { CreateCompany } from "./CreateCompany";

export default {
  title: "modules/SheetHeader/CreateCompany",
  component: CreateCompany,
};

type Props = ComponentProps<typeof CreateCompany>;

const CreateCompanyStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <CreateCompany {...props} />
    </TestWrapper>
  );
};

export const Playground = CreateCompanyStory.bind({});
Playground.args = { wrapperProps: {} };
