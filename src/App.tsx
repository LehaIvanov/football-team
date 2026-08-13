import { FootballField, PlayerForm } from "./components";
import { players } from "./data";
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
