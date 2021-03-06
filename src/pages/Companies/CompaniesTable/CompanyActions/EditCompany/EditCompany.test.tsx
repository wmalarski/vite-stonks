import { i18text } from "@/tests/i18text";
import { mockCompany, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { EditCompany } from "./EditCompany";

type Props = ComponentProps<typeof EditCompany>;

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
      <EditCompany {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<EditCompany />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("company.edit.button");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
