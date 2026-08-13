import { FootballField } from "./components/FootballField/FootballField";
import { PlayerForm } from "./components/PlayerForm/PlayerForm";
import { players } from "./data/players";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Состав команды</h1>
      <div className={styles.content}>
        <PlayerForm />
        <FootballField players={players} />
      </div>
    </main>
  );
};
