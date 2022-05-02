import { mockReport, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
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

    const header = i18n.t<string>("EditReport", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});