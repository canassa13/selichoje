import Link from "next/link";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.containerHeader}>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
  );
};
