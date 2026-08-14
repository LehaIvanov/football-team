import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SaveTeam } from "./SaveTeam";

describe("SaveTeam", () => {
  it("calls save handler", async () => {
    const user = userEvent.setup();
    const saveTeam = vi.fn();

    render(<SaveTeam saveTeam={saveTeam} />);

    await user.click(screen.getByRole("button", { name: "Сохранить команду" }));

    expect(saveTeam).toHaveBeenCalledOnce();
  });
});
