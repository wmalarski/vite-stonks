import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Form } from "antd";
import { ComponentProps } from "react";
import { CompanyAutoComplete } from "./CompanyAutoComplete";

type Props = ComponentProps<typeof CompanyAutoComplete>;

const Component = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const [form] = Form.useForm<{ company_id: number }>();

  const defaultProps: Props = {
    form,
    sheet: mockSheet(),
  };

  return (
    <TestWrapper {...wrapperProps}>
      <CompanyAutoComplete {...defaultProps} {...props} />
    </TestWrapper>
  );
};

const renderComponent = (props: PropsWithTestWrapper<Partial<Props>> = {}) => {
  return render(<Component {...props} />);
};

describe("<CompanyAutoComplete />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18n.t<string>("CompanyAutoComplete", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
