import { FootballField, PlayerForm } from "./components";
import styles from "./App.module.scss";
import { useState } from "react";
import type { Player } from "./domain";

export const App = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const addPlayer = (player: Player) => setPlayers(players.length >= 11 ? players : [...players, player]);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Состав команды</h1>
      <div className={styles.content}>
        <PlayerForm addPlayer={addPlayer} />
        <FootballField players={players} />
      </div>
    </main>
  );
};
