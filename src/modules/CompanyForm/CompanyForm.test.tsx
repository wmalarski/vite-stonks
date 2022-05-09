import { Company } from "@/services/CompanyApi";
import { i18text } from "@/tests/i18text";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Form } from "antd";
import { ComponentProps } from "react";
import { CompanyForm } from "./CompanyForm";

type Props = ComponentProps<typeof CompanyForm>;

const Component = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>>) => {
  const [form] = Form.useForm<Company>();

  const defaultProps: Props = { form };

  return (
    <TestWrapper {...wrapperProps}>
      <CompanyForm {...defaultProps} {...props} />
    </TestWrapper>
  );
};

const renderComponent = (props: PropsWithTestWrapper<Partial<Props>> = {}) => {
  return render(<Component {...props} />);
};

describe("<CompanyForm />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("company.form.address1");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
