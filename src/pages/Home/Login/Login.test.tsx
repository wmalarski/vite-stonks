import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { Login } from "./Login";

type Props = ComponentProps<typeof Login>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <Login {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<Login />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18n.t<string>("pageTitle", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
