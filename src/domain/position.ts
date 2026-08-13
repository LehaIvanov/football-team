export const positions = [
  "goalkeeper",
  "forward",
  "leftDefender",
  "defender",
  "rightDefender",
  "midfielder",
  "leftMidfielder",
  "rightMidfielder",
] as const;

export type Position = (typeof positions)[number];
