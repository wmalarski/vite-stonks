import { i18text } from "@/tests/i18text";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Form } from "antd";
import { ComponentProps } from "react";
import { ReportForm, ReportFormArgs } from "./ReportForm";

type Props = ComponentProps<typeof ReportForm>;

const Component = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>>) => {
  const [form] = Form.useForm<ReportFormArgs>();

  const defaultProps: Props = { form };

  return (
    <TestWrapper {...wrapperProps}>
      <ReportForm {...defaultProps} {...props} />
    </TestWrapper>
  );
};

const renderComponent = (props: PropsWithTestWrapper<Partial<Props>> = {}) => {
  return render(<Component {...props} />);
};

describe("<ReportForm />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("report.form.date");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
