import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
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
  const defaultProps: Props = {};

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

    const header = i18n.t<string>("CompanyActions", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});