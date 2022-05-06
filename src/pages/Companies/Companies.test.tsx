import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { Companies } from "./Companies";

type Props = ComponentProps<typeof Companies>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <Companies {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<Companies />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    await expect(screen.findByTestId("spin")).resolves.toBeInTheDocument();
  });
});
