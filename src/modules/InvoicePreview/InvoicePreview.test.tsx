import { mockInvoice, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
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

    const header = i18n.t<string>("InvoicePreview", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
