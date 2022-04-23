import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { Invoice } from "./Invoice";

type Props = ComponentProps<typeof Invoice>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <Invoice {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<Invoice />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    await expect(screen.findByTestId("spin")).resolves.toBeInTheDocument();
  });
});
