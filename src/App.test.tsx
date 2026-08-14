import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { App } from "./App";
import type { Position } from "./domain";

const formation: Position[] = [
  "goalkeeper",
  "leftDefender",
  "defender",
  "defender",
  "rightDefender",
  "leftMidfielder",
  "midfielder",
  "midfielder",
  "rightMidfielder",
  "forward",
  "forward",
];

describe("App", () => {
  it("replaces the player form when the team is complete and clears the team on save", async () => {
    const user = userEvent.setup();

    render(<App />);

    for (const [index, position] of formation.entries()) {
      await user.type(screen.getByLabelText("Имя игрока"), `Игрок ${index + 1}`);
      await user.selectOptions(screen.getByLabelText("Позиция"), position);
      await user.click(screen.getByRole("button", { name: "Добавить" }));
    }

    expect(screen.queryByLabelText("Данные игрока")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Сохранить команду" }));

    expect(screen.getByLabelText("Данные игрока")).toBeInTheDocument();
    expect(screen.queryByText("Игрок 1")).not.toBeInTheDocument();
  });
});
