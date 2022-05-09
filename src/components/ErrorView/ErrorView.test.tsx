import { i18text } from "@/tests/i18text";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { ErrorView } from "./ErrorView";

type Props = ComponentProps<typeof ErrorView>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <ErrorView {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<ErrorView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("error.title");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
