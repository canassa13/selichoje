import Link from "next/link"

import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.containerHeader}>
      <nav>
        <li>
          <Link href="/">
            <a>
              Home
            </a>
          </Link>
        </li>
      </nav>
    </header>
  )
}