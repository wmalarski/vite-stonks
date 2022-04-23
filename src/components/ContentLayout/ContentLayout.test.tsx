import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { ContentLayout } from "./ContentLayout";

type Props = ComponentProps<typeof ContentLayout>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    children: "Hello",
    sidebar: "Sidebar",
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <ContentLayout {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<ContentLayout />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18n.t<string>("Hello", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
