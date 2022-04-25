import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
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
    index: 0,
    sheet: mockSheet(),
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

    const header = i18n.t<string>("report.remove", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
