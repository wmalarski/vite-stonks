import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { SheetForm } from "./SheetForm";

type Props = ComponentProps<typeof SheetForm>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    form: {} as any,
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <SheetForm {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<CreateSheetForm />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18n.t<string>("CreateSheetForm", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});