import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { Settings } from "./Settings";

type Props = ComponentProps<typeof Settings>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <Settings {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<Settings />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    await expect(screen.findByTestId("spin")).resolves.toBeInTheDocument();
  });
});
