import { i18text } from "@/tests/i18text";
import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { SheetSidebar } from "./SheetSidebar";

type Props = ComponentProps<typeof SheetSidebar>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    sheetId: mockSheet().id,
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <SheetSidebar {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<SheetSidebar />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("navigation.details");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
