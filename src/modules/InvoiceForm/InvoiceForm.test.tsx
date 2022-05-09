import { i18text } from "@/tests/i18text";
import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Form } from "antd";
import { ComponentProps } from "react";
import { InvoiceForm, InvoiceFormArgs } from "./InvoiceForm";

type Props = ComponentProps<typeof InvoiceForm>;

const Component = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>>) => {
  const [form] = Form.useForm<InvoiceFormArgs>();

  const defaultProps: Props = { form, sheet: mockSheet() };

  return (
    <TestWrapper {...wrapperProps}>
      <InvoiceForm {...defaultProps} {...props} />
    </TestWrapper>
  );
};

const renderComponent = (props: PropsWithTestWrapper<Partial<Props>> = {}) => {
  return render(<Component {...props} />);
};

describe("<InvoiceForm />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("invoice.form.name");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
