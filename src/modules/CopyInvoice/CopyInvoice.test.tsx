import { i18text } from "@/tests/i18text";
import { mockInvoice, mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentProps } from "react";
import { InvoiceFormArgs } from "../InvoiceForm/InvoiceForm";
import { CopyInvoice } from "./CopyInvoice";

type Props = ComponentProps<typeof CopyInvoice>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    invoice: mockInvoice(),
    onSuccess: () => void 0,
    sheet: mockSheet(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <CopyInvoice {...defaultProps} {...props} />
    </TestWrapper>
  );
};

const fillForm = async (form: InvoiceFormArgs) => {
  userEvent.type(
    await screen.findByLabelText(
      i18text("invoice.copy.company", { ns: "common" })
    ),
    "company"
  );
};

describe("<CopyInvoice />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("invoice.copy.button");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });

  it("should open and close modal", async () => {
    expect.hasAssertions();

    renderComponent();

    const open = i18text("invoice.copy.button");
    const cancel = i18text("invoice.copy.cancel");
    const save = i18text("invoice.copy.save");

    userEvent.click(await screen.findByText(open));

    await expect(screen.findByText(save)).resolves.toBeInTheDocument();

    userEvent.click(await screen.findByText(cancel));

    await expect(screen.findByText(save)).resolves.toBeInTheDocument();
  });

  it("should open and save", async () => {
    expect.hasAssertions();

    renderComponent();

    const open = i18text("invoice.copy.button");
    const cancel = i18text("invoice.copy.cancel");
    const save = i18text("invoice.copy.save");

    userEvent.click(await screen.findByText(open));

    await expect(screen.findByText(save)).resolves.toBeInTheDocument();

    userEvent.click(await screen.findByText(cancel));

    await expect(screen.findByText(save)).resolves.toBeInTheDocument();
  });
});
