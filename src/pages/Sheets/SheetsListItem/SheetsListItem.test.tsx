import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { SheetsListItem } from "./SheetsListItem";

type Props = ComponentProps<typeof SheetsListItem>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    sheet: mockSheet(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <SheetsListItem {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<SheetsListItem />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    const sheet = mockSheet();

    renderComponent({ sheet });

    await expect(screen.findByText(sheet.name)).resolves.toBeInTheDocument();
  });
});
