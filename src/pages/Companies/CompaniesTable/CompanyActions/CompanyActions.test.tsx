import { i18text } from "@/tests/i18text";
import { mockCompany, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { CompanyActions } from "./CompanyActions";

type Props = ComponentProps<typeof CompanyActions>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    company: mockCompany(),
    sheet: mockSheet(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <CompanyActions {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<CompanyActions />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("company.edit.button");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
