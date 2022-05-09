import { i18text } from "@/tests/i18text";
import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { InvoicesList } from "./InvoicesList";

type Props = ComponentProps<typeof InvoicesList>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    sheet: mockSheet(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <InvoicesList {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<InvoicesList />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("invoices.date");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
