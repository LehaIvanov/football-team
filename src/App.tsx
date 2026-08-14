import { FootballField, PlayerForm, SaveTeam } from "./components";
import styles from "./App.module.scss";
import { useState } from "react";
import type { Player } from "./domain";

export const App = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const addPlayer = (player: Player) => setPlayers(players.length >= 11 ? players : [...players, player]);
  const saveTeam = () => setPlayers([]);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Состав команды</h1>
      <div className={styles.content}>
        {players.length === 11 ? (
          <SaveTeam saveTeam={saveTeam} />
        ) : (
          <PlayerForm addPlayer={addPlayer} players={players} />
        )}
        <FootballField players={players} />
      </div>
    </main>
  );
};
