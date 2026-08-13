import { positionLabels } from "../../data";
import { positions } from "../../domain";
import { Button } from "../Button";
import styles from "./PlayerForm.module.scss";

export const PlayerForm = () => (
  <form className={styles.form} aria-label="Данные игрока">
    <div className={styles.field}>
      <label className={styles.label} htmlFor="player-name">
        Имя игрока
      </label>
      <input
        className={styles.control}
        id="player-name"
        name="playerName"
        type="text"
        placeholder="Введите имя"
      />
    </div>

    <div className={styles.field}>
      <label className={styles.label} htmlFor="player-position">
        Позиция
      </label>
      <select
        className={styles.control}
        id="player-position"
        name="playerPosition"
        defaultValue=""
      >
        <option value="" disabled>
          Выберите позицию
        </option>
        {positions.map((position) => (
          <option key={position} value={position}>
            {positionLabels[position]}
          </option>
        ))}
      </select>
    </div>

    <Button>Добавить</Button>
  </form>
);
