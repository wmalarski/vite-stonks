import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { SheetsSidebar } from "./SheetsSidebar";

type Props = ComponentProps<typeof SheetsSidebar>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <SheetsSidebar {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<SheetsSidebar />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18n.t<string>("navigation.sheets", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
