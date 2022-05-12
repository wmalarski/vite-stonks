import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { SheetsListItem } from "./SheetsListItem";

export default {
  title: "pages/Sheets/SheetsListItem",
  component: SheetsListItem,
} as ComponentMeta<typeof SheetsListItem>;

type Props = ComponentProps<typeof SheetsListItem>;

const SheetsListItemStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SheetsListItem {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof SheetsListItemStory> = SheetsListItemStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {}, sheet: mockSheet() };
