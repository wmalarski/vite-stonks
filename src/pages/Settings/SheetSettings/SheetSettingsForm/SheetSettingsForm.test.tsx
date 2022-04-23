import { mockSheet } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { SheetSettingsForm } from "./SheetSettingsForm";

type Props = ComponentProps<typeof SheetSettingsForm>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    isLoading: false,
    onFinish: () => void 0,
    initialValues: mockSheet(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <SheetSettingsForm {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<SheetSettingsForm />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18n.t<string>("settings.form.account", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
