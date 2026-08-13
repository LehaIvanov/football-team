import type { Position } from "../types/position";

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

export const positions = Object.keys(positionLabels) as Position[];
