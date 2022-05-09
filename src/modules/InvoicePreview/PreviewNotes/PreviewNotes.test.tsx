import { i18text } from "@/tests/i18text";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { PreviewNotes } from "./PreviewNotes";

type Props = ComponentProps<typeof PreviewNotes>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <PreviewNotes {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<PreviewNotes />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("preview.note");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
