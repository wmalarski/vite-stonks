import { mockInvoice } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
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

    renderComponent();

    const header = i18n.t<string>("InvoiceTitle", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
