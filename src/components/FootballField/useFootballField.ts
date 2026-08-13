import type { Player, Position } from "../../domain";

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

export const useFootballField = (players: Player[]) => {
  const positionCounts: Partial<Record<Position, number>> = {};

  return players.map((player) => {
    const positionIndex = positionCounts[player.position] ?? 0;
    const coordinates = positionCoordinates[player.position][positionIndex];

    positionCounts[player.position] = positionIndex + 1;

    return { player, coordinates };
  });
};
