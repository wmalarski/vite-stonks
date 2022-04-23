import { PropsWithTestWrapper, TestWrapper } from "@/tests/TestWrapper";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { Loading } from "./Loading";

type Props = ComponentProps<typeof Loading>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <Loading {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<Loading />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    await expect(screen.findByTestId("spin")).resolves.toBeInTheDocument();
  });
});
