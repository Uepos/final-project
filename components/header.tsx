import Link from 'next/link';
import React from 'react';
import styles from '../styles/header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">ReelCritics</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/movies">Movies</Link>
          </li>
          <li>
            <Link href="/reviews">Reviews</Link>
          </li>
          <li>
            <Link href="/login">Login/Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
