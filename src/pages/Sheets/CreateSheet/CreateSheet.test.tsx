import { i18text } from "@/tests/i18text";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentProps } from "react";
import { CreateSheet } from "./CreateSheet";

type Props = ComponentProps<typeof CreateSheet>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <CreateSheet {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<CreateSheet />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("sheet.create.button");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });

  it("should open and close modal", async () => {
    expect.hasAssertions();

    renderComponent();

    const open = i18text("sheet.create.button");
    const cancel = i18text("sheet.create.cancel");
    const save = i18text("sheet.create.save");

    userEvent.click(await screen.findByText(open));

    await expect(screen.findByText(save)).resolves.toBeInTheDocument();

    userEvent.click(await screen.findByText(cancel));

    await expect(screen.findByText(save)).resolves.toBeInTheDocument();
  });
});
