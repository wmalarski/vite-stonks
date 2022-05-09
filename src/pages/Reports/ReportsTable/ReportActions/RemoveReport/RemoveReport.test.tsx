import { i18text } from "@/tests/i18text";
import { mockReport, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { RemoveReport } from "./RemoveReport";

type Props = ComponentProps<typeof RemoveReport>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    sheet: mockSheet(),
    report: mockReport(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <RemoveReport {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<RemoveReport />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("report.remove");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
