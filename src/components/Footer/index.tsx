import Link from "next/link";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <nav>
        <Link href="/politicas">
          <a>Políticas</a>
        </Link>
        <Link href="/termos">
          <a>Termos</a>
        </Link>
      </nav>
    </footer>
  );
};
