import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Form } from "antd";
import { ComponentProps } from "react";
import { SheetForm, SheetFormArgs } from "./SheetForm";

type Props = ComponentProps<typeof SheetForm>;

const Component = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>>) => {
  const [form] = Form.useForm<SheetFormArgs>();

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

    const header = i18n.t<string>("CreateSheetForm", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
