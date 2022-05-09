import { i18text } from "@/tests/i18text";
import { mockInvoice, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentProps } from "react";
import { EditInvoice } from "./EditInvoice";

type Props = ComponentProps<typeof EditInvoice>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    invoice: mockInvoice(),
    sheet: mockSheet(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <EditInvoice {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<EditInvoice />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("invoice.edit.button");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });

  it("should open and close modal", async () => {
    expect.hasAssertions();

    renderComponent();

    const open = i18text("invoice.edit.button");
    const cancel = i18text("invoice.edit.cancel");
    const save = i18text("invoice.edit.save");

    userEvent.click(await screen.findByText(open));

    await expect(screen.findByText(save)).resolves.toBeInTheDocument();

    userEvent.click(await screen.findByText(cancel));

    await expect(screen.findByText(save)).resolves.toBeInTheDocument();
  });
});
