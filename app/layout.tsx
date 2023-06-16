import Header from '../components/header';
import styles from '../styles/global.module.scss';

export default function RootLayout() {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <Header />
        </header>
        <main className={styles.main} />
      </body>
    </html>
  );
}
