import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PlayerForm } from "./PlayerForm";

describe("PlayerForm", () => {
  it("renders name and position fields", () => {
    render(<PlayerForm addPlayer={() => {}} />);

    expect(screen.getByLabelText("Имя игрока")).toBeInTheDocument();
    expect(screen.getByLabelText("Позиция")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Добавить" }),
    ).toBeInTheDocument();
  });

  it("fills the form and submits player data", async () => {
    const user = userEvent.setup();
    const addPlayer = vi.fn();

    render(<PlayerForm addPlayer={addPlayer} />);

    const nameInput = screen.getByLabelText("Имя игрока");
    const positionSelect = screen.getByLabelText("Позиция");

    await user.type(nameInput, "Иван Иванов");
    await user.selectOptions(positionSelect, "forward");

    expect(nameInput).toHaveValue("Иван Иванов");
    expect(positionSelect).toHaveValue("forward");

    await user.click(screen.getByRole("button", { name: "Добавить" }));

    expect(addPlayer).toHaveBeenCalledOnce();
    expect(addPlayer).toHaveBeenCalledWith({
      id: expect.any(String),
      name: "Иван Иванов",
      position: "forward",
    });

    expect(nameInput).toHaveValue("");
    expect(positionSelect).toHaveValue("");
  });
});
