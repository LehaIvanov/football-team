import { render, screen } from "@testing-library/react";

import { FootballField } from "./FootballField";

describe("FootballField", () => {
  it("renders the field", () => {
    render(<FootballField players={[]} />);

    expect(screen.getByAltText("Футбольное поле")).toBeInTheDocument();
  });

  it("renders Messi", () => {
    render(<FootballField players={[{ id: 1, name: "Messi", position: "forward" }]} />);

    const player = screen.getByTitle("Центральный нападающий");

    expect(player).toBeInTheDocument();
    expect(player).toHaveTextContent("Messi");
  });
});
