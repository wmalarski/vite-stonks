import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form } from "antd";
import { ComponentProps } from "react";
import { SheetForm } from "./SheetForm";

export default {
  title: "pages/Sheets/CreateSheet/CreateSheetForm",
  component: SheetForm,
} as ComponentMeta<typeof SheetForm>;

type Props = ComponentProps<typeof SheetForm>;

const CreateSheetFormStory = ({
  wrapperProps,
}: PropsWithTestWrapper<Props>) => {
  const [form] = Form.useForm();

  return (
    <TestWrapper {...wrapperProps}>
      <SheetForm form={form} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof CreateSheetFormStory> = CreateSheetFormStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
