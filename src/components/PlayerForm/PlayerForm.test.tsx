import { render, screen } from "@testing-library/react";

import { PlayerForm } from "./PlayerForm";

describe("PlayerForm", () => {
  it("renders name and position fields", () => {
    render(<PlayerForm />);

    expect(screen.getByLabelText("Имя игрока")).toBeInTheDocument();
    expect(screen.getByLabelText("Позиция")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Добавить" })).toBeInTheDocument();
  });
});
