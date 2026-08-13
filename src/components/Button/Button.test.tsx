import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("renders a button with button type by default", () => {
    render(<Button>Добавить</Button>);

    expect(screen.getByRole("button", { name: "Добавить" })).toHaveAttribute(
      "type",
      "button",
    );
  });
});
