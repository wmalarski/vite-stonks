import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
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
    sheetId: String(mockSheet().id),
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

    const header = i18n.t<string>("SheetSidebar", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
