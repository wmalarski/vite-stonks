import { mockProfile } from "@/tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import i18n from "@/utils/i18next";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { PreviewMyInfo } from "./PreviewMyInfo";

type Props = ComponentProps<typeof PreviewMyInfo>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {
    profile: mockProfile(),
  };

  return render(
    <TestWrapper {...wrapperProps}>
      <PreviewMyInfo {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<PreviewMyInfo />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18n.t<string>("PreviewMyInfo", { ns: "common" });
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
