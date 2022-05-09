import { i18text } from "@/tests/i18text";
import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { CreateReport } from "./CreateReport";

type Props = ComponentProps<typeof CreateReport>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    onSuccess: () => void 0,
    sheet: mockSheet(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <CreateReport {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<CreateReport />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("report.create.button");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
