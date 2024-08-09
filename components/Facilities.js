// components/Facilities.js
import React from 'react';
import styles from '../styles/Facilities.module.css';

const Facilities = () => {
  return (
    <div className={styles.facilities}>
      <h2>Our Facilities</h2>
      <ul>
        <li>24/7 Customer Support</li>
        <li>Free Wi-Fi</li>
        <li>Comfortable Seating</li>
        <li>In-flight Entertainment</li>
      </ul>
    </div>
  );
};

export default Facilities;
