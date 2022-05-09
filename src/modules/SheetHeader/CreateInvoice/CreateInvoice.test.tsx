import { i18text } from "@/tests/i18text";
import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentProps } from "react";
import { CreateInvoice } from "./CreateInvoice";

type Props = ComponentProps<typeof CreateInvoice>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    onSuccess: () => void 0,
    sheet: mockSheet(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <CreateInvoice {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<CreateInvoice />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("invoice.create.button");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });

  it("should open and close modal", async () => {
    expect.hasAssertions();

    renderComponent();

    const open = i18text("invoice.create.button");
    const cancel = i18text("invoice.create.cancel");
    const save = i18text("invoice.create.save");

    userEvent.click(await screen.findByText(open));

    await expect(screen.findByText(save)).resolves.toBeInTheDocument();

    userEvent.click(await screen.findByText(cancel));

    await expect(screen.findByText(save)).resolves.toBeInTheDocument();
  });
});
