import { mockInvoice, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { PreviewHeader } from "./PreviewHeader";

type Props = ComponentProps<typeof PreviewHeader>;

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
      <PreviewHeader {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<PreviewHeader />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    const sheet = mockSheet();

    renderComponent();

    const regex = new RegExp(`${sheet.city}`);
    await expect(screen.findByText(regex)).resolves.toBeInTheDocument();
  });
});
