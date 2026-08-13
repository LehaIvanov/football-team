import clsx from "clsx";

import fieldUrl from "../../assets/field.svg";
import { positionLabels } from "../../data";
import type { Player, Position } from "../../types";
import { PlayerIcon } from "../PlayerIcon";
import styles from "./FootballField.module.scss";

type FootballFieldProps = {
  players: Player[];
};

type Coordinates = {
  x: number;
  y: number;
};

const positionCoordinates: Record<Position, Coordinates[]> = {
  goalkeeper: [{ x: 50, y: 91 }],
  leftDefender: [{ x: 15, y: 65 }],
  defender: [
    { x: 38, y: 75 },
    { x: 62, y: 75 },
  ],
  rightDefender: [{ x: 85, y: 65 }],
  leftMidfielder: [{ x: 15, y: 40 }],
  midfielder: [
    { x: 38, y: 50 },
    { x: 62, y: 50 },
  ],
  rightMidfielder: [{ x: 85, y: 40 }],
  forward: [
    { x: 35, y: 20 },
    { x: 65, y: 20 },
  ],
};

export const FootballField = ({ players }: FootballFieldProps) => {
  const positionCounts: Partial<Record<Position, number>> = {};
  const positionedPlayers = players.map((player) => {
    const positionIndex = positionCounts[player.position] ?? 0;
    const coordinates = positionCoordinates[player.position][positionIndex];

    positionCounts[player.position] = positionIndex + 1;

    return { player, coordinates };
  });

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
