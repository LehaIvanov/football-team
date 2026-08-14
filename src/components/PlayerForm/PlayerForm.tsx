import { positionLabels, positionLimits } from "../../data";
import { Position, type Player } from "../../domain";
import { Button } from "../Button";
import { Card } from "../Card";
import styles from "./PlayerForm.module.scss";
import { usePlayerForm } from "./usePlayerForm";

type PlayerFormProps = {
  addPlayer: (value: Player) => void;
  players: Player[];
};

export const PlayerForm = ({ addPlayer, players }: PlayerFormProps) => {
  const { name, setName, position, setPosition, submit } = usePlayerForm(addPlayer);
  const availablePositions = Position.values.filter(
    (position) =>
      players.filter((player) => player.position === position).length <
      positionLimits[position],
  );

  return (
    <Card>
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
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            value={position}
            onChange={(event) => {
              const value = event.target.value;

              if (Position.isValid(value)) {
                setPosition(value);
              }
            }}
          >
            <option value="" disabled>
              Выберите позицию
            </option>
            {availablePositions.map((position) => (
              <option key={position} value={position}>
                {positionLabels[position]}
              </option>
            ))}
          </select>
        </div>

        <Button onClick={submit}>Добавить</Button>
      </form>
    </Card>
  );
};
