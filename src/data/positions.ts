import type { Position } from "../domain";

export const positionLabels: Record<Position, string> = {
  goalkeeper: "Вратарь",
  forward: "Центральный нападающий",
  leftDefender: "Левый защитник",
  defender: "Центральный защитник",
  rightDefender: "Правый защитник",
  midfielder: "Центральный полузащитник",
  leftMidfielder: "Левый полузащитник",
  rightMidfielder: "Правый полузащитник",
};

export const positionLimits: Record<Position, number> = {
  goalkeeper: 1,
  forward: 2,
  leftDefender: 1,
  defender: 2,
  rightDefender: 1,
  midfielder: 2,
  leftMidfielder: 1,
  rightMidfielder: 1,
};

