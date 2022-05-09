import { i18text } from "@/tests/i18text";
import { mockInvoice, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { InvoicePreview } from "./InvoicePreview";

type Props = ComponentProps<typeof InvoicePreview>;

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
      <InvoicePreview {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<InvoicePreview />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("preview.notes");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
