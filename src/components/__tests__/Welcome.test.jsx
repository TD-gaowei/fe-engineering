import { render } from "@testing-library/react";
import Welcome from "../Welcome.jsx";

describe("test Welcome component", () => {
  it("render correctly", () => {
    const { getByTestId } = render(<Welcome />);

    expect(getByTestId("welcome")).toBeInTheDocument();
  });
});
