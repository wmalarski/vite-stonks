import { mockDoc } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
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
    doc: mockDoc(),
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

    renderComponent();

    const header = i18n.t<string>("SheetHeader", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
