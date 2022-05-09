import { i18text } from "@/tests/i18text";
import { mockInvoice, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { RemoveInvoice } from "./RemoveInvoice";

type Props = ComponentProps<typeof RemoveInvoice>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    sheet: mockSheet(),
    invoice: mockInvoice(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <RemoveInvoice {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<RemoveInvoice />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("invoice.remove.button");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
