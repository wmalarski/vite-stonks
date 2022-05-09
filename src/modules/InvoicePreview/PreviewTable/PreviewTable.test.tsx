import { i18text } from "@/tests/i18text";
import { mockInvoice } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { PreviewTable } from "./PreviewTable";

type Props = ComponentProps<typeof PreviewTable>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    invoice: mockInvoice(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <PreviewTable {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<PreviewTable />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("preview.lp");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
