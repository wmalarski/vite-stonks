import { mockDoc } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
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
    doc: mockDoc(),
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

    renderComponent();

    const header = i18n.t<string>("SheetsListItem", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
