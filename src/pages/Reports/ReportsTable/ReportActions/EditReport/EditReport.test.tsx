import { i18text } from "@/tests/i18text";
import { mockReport, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { EditReport } from "./EditReport";

type Props = ComponentProps<typeof EditReport>;

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
      <EditReport {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<EditReport />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("report.edit.button");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
