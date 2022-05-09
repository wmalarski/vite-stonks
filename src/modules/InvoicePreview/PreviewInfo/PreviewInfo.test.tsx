import { i18text } from "@/tests/i18text";
import { mockInvoice, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { PreviewInfo } from "./PreviewInfo";

type Props = ComponentProps<typeof PreviewInfo>;

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
      <PreviewInfo {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<PreviewInfo />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("preview.payment");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
