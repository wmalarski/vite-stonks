import { mockInvoice, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { InvoiceHeader } from "./InvoiceHeader";

type Props = ComponentProps<typeof InvoiceHeader>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    invoice: mockInvoice(),
    sheet: mockSheet(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <InvoiceHeader {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<InvoiceHeader />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    const invoice = mockInvoice();

    renderComponent({ invoice });

    await expect(screen.findByText(invoice.title)).resolves.toBeInTheDocument();
  });
});
