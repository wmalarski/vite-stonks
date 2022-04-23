import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { SheetHeader } from "./SheetHeader";

type Props = ComponentProps<typeof SheetHeader>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    sheet: mockSheet(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <SheetHeader {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<SheetHeader />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    const sheet = mockSheet();

    renderComponent({ sheet });

    await expect(screen.findByText(sheet.name)).resolves.toBeInTheDocument();
  });
});
