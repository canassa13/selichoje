import { ReactNode } from "react";

import { FaQuestionCircle } from "react-icons/fa";

import styles from "./styles.module.scss";

interface TooltipProps {
  children: ReactNode;
}

export const Tooltip = ({ children }: TooltipProps) => {
  return (
    <div className={styles.tooltip}>
      <FaQuestionCircle color="#bd3800" />
      <span className={styles.tooltipText}>{children}</span>
    </div>
  );
};
