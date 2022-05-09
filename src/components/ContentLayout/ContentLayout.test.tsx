import { i18text } from "@/tests/i18text";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
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

    const header = i18text("Hello");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
