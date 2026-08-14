import clsx from "clsx";
import type { HTMLAttributes } from "react";

import styles from "./Card.module.scss";

type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => (
  <div className={clsx(styles.card, className)} {...props} />
);
