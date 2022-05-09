import { i18text } from "@/tests/i18text";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { Header } from "./Header";

type Props = ComponentProps<typeof Header>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <Header {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<Header />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("pageTitle");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
