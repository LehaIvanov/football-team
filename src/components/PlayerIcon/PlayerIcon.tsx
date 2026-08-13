import clsx from "clsx";

import playerIconUrl from "../../assets/player.svg";
import styles from "./PlayerIcon.module.scss";

type PlayerIconProps = {
  className?: string;
  size?: number;
};

export const PlayerIcon = ({
  className,
  size = 100,
}: PlayerIconProps) => (
  <span
    className={clsx(styles.icon, className)}
    aria-hidden="true"
    style={{
      width: size,
      height: size,
      maskImage: `url("${playerIconUrl}")`,
      WebkitMask: `url("${playerIconUrl}") center / contain no-repeat`,
    }}
  />
);
