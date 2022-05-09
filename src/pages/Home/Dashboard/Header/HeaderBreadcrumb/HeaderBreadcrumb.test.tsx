import { i18text } from "@/tests/i18text";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { HeaderBreadcrumb } from "./HeaderBreadcrumb";

type Props = ComponentProps<typeof HeaderBreadcrumb>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <HeaderBreadcrumb {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<HeaderBreadcrumb />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("navigation.home");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
