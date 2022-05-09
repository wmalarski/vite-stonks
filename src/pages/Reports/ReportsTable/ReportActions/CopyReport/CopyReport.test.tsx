import { i18text } from "@/tests/i18text";
import { mockReport, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { CopyReport } from "./CopyReport";

type Props = ComponentProps<typeof CopyReport>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    report: mockReport(),
    sheet: mockSheet(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <CopyReport {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<CopyReport />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("report.copy.button");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
