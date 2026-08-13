const values = [
  "goalkeeper",
  "forward",
  "leftDefender",
  "defender",
  "rightDefender",
  "midfielder",
  "leftMidfielder",
  "rightMidfielder",
] as const;

export type Position = (typeof values)[number];

export const Position = { values };
