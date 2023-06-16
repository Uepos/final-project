import React from 'react';
import styles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>©2023 ReelCritics. All rights reserved.</p>
        <p>Made with ❤️ by ReelCritics Team</p>
      </div>
    </footer>
  );
};

export default Footer;
