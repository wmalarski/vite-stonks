import { Sheet } from "@/services/SheetApi";
import { i18text } from "@/tests/i18text";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Form } from "antd";
import { ComponentProps } from "react";
import { SheetForm } from "./SheetForm";

type Props = ComponentProps<typeof SheetForm>;

const Component = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>>) => {
  const [form] = Form.useForm<Sheet>();

  const defaultProps: Props = { form };

  return (
    <TestWrapper {...wrapperProps}>
      <SheetForm {...defaultProps} {...props} />
    </TestWrapper>
  );
};

const renderComponent = (props: PropsWithTestWrapper<Partial<Props>> = {}) => {
  return render(<Component {...props} />);
};

describe("<CreateSheetForm />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("sheet.form.name");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
