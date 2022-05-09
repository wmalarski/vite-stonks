import { i18text } from "@/tests/i18text";
import { mockInvoice } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { PreviewSummary } from "./PreviewSummary";

type Props = ComponentProps<typeof PreviewSummary>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    invoice: mockInvoice(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <PreviewSummary {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<PreviewSummary />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("preview.payed");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
