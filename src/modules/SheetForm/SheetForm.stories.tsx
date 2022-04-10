import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import type { Story } from "@ladle/react";
import { Form } from "antd";
import { ComponentProps } from "react";
import { SheetForm } from "./SheetForm";

export default {
  title: "pages/Sheets/CreateSheet/CreateSheetForm",
  component: SheetForm,
};

type Props = ComponentProps<typeof SheetForm>;

const CreateSheetFormStory: Story<PropsWithTestWrapper<Props>> = ({
  wrapperProps,
}: PropsWithTestWrapper<Props>) => {
  const [form] = Form.useForm();

  return (
    <TestWrapper {...wrapperProps}>
      <SheetForm form={form} />
    </TestWrapper>
  );
};

export const Playground = CreateSheetFormStory.bind({});
Playground.args = { wrapperProps: {} };
