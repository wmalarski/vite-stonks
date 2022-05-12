import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { Companies } from "./Companies";

export default {
  title: "pages/Companies",
  component: Companies,
} as ComponentMeta<typeof Companies>;

type Props = ComponentProps<typeof Companies>;

const CompaniesStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Companies {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof CompaniesStory> = CompaniesStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
