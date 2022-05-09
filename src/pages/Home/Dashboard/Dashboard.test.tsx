import { i18text } from "@/tests/i18text";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { Dashboard } from "./Dashboard";

type Props = ComponentProps<typeof Dashboard>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <Dashboard {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<Dashboard />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("pageTitle");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
