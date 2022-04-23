import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { Sheet } from "./Sheet";

type Props = ComponentProps<typeof Sheet>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <Sheet {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<Sheet />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    await expect(screen.findByTestId("spin")).resolves.toBeInTheDocument();
  });
});
