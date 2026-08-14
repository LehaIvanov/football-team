import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import type { Player, Position } from "../../domain";

export const usePlayerForm = (addPlayer: (value: Player) => void) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState<Position | "">("");
  const submit = () => {
    if (position === "" || name.trim() === "") {
      return;
    }

    addPlayer({ id: uuidv4(), name, position });
    setName("");
    setPosition("");
  };

  return { submit, name, setName, position, setPosition };
};