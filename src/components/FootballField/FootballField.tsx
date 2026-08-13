import clsx from "clsx";

import fieldUrl from "../../assets/field.svg";
import { positionLabels } from "../../data";
import type { Player } from "../../domain";
import { PlayerIcon } from "../PlayerIcon";
import styles from "./FootballField.module.scss";
import { useFootballField } from "./useFootballField";

type FootballFieldProps = {
  players: Player[];
};

export const FootballField = ({ players }: FootballFieldProps) => {
  const positionedPlayers = useFootballField(players);

  return (
    <div className={styles.field} aria-label="Расстановка команды 4-4-2">
      <img className={styles.fieldImage} src={fieldUrl} alt="Футбольное поле" />

      {positionedPlayers.map(({ player, coordinates }) => (
        <div
          className={clsx(styles.player, {
            [styles.goalkeeper]: player.position === "goalkeeper",
          })}
          key={player.id}
          style={{ left: `${coordinates.x}%`, top: `${coordinates.y}%` }}
          title={positionLabels[player.position]}
        >
          <PlayerIcon className={styles.icon} size={48} />
          <span className={styles.name}>{player.name}</span>
        </div>
      ))}
    </div>
  );
};
