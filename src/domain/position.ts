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

const isValid = (value: string): value is Position =>
    Position.values.some((position) => position === value);

export type Position = (typeof values)[number];

export const Position = { isValid, values };
