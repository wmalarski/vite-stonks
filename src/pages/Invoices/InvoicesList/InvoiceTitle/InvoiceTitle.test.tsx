import { mockInvoice } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { InvoiceTitle } from "./InvoiceTitle";

type Props = ComponentProps<typeof InvoiceTitle>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    sheetId: 1,
    invoice: mockInvoice(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <InvoiceTitle {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<InvoiceTitle />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    const invoice = mockInvoice();

    renderComponent({ invoice });

    await expect(screen.findByText(invoice.title)).resolves.toBeInTheDocument();
  });
});
