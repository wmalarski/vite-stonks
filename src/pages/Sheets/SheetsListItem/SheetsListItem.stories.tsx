import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { SheetsListItem } from "./SheetsListItem";

export default {
  title: "pages/Sheets/SheetsListItem",
  component: SheetsListItem,
};

type Props = ComponentProps<typeof SheetsListItem>;

const SheetsListItemStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SheetsListItem {...props} />
    </TestWrapper>
  );
};

export const Playground = SheetsListItemStory.bind({});
Playground.args = { wrapperProps: {}, sheet: mockSheet };
