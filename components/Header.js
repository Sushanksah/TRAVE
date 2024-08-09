// components/Header.js
import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.navLeft}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <h6>TRAVE</h6>
      </div>
      
      <ul className={styles.navRight}>
        <li>Login</li>
        <li>Register</li>
        <li className={styles.profileContainer}>
          <img src="/pp.png" alt="Profile Logo" className={styles.profileLogo} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
