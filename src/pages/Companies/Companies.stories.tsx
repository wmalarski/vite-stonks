import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { Companies } from "./Companies";

export default {
  title: "pages/Companies",
  component: Companies
};

type Props = ComponentProps<typeof Companies>;

const CompaniesStory: Story<PropsWithTestWrapper<Props>> = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Companies {...props} />
    </TestWrapper>
  );
};

export const Playground = CompaniesStory.bind({});
Playground.args = { wrapperProps: {} };
