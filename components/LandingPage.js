// components/LandingPage.js
import React from 'react';
import Head from 'next/head';
import styles from '../styles/LandingPage.module.css';
import Header from './Header';
import TicketBooking from './TicketBooking';
import Facilities from './Facilities';

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>TRAVE</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.landingPage}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            <div className={styles.content}>
              <h2 className={styles.heading2}>MAKING YOUR BOOKING EASY...</h2>
              <h1 className={styles.heading1}>ALL YOU WANT</h1>
              <p className={styles.paragraph}>
                Make your journey more comfortable with us.
                We are always ready to serve you.
              </p>
              <div className={styles.ticketContainer}>
                <TicketBooking />
              </div>
              <button className={styles.discoverButton}>Discover More</button>
            </div>
          </div>
          {/* Right Section */}
          <div className={styles.rightSection}>
            <div className={styles.content}>
              <h1 className={styles.heading1}>WE WORK FOR YOU!</h1>
            </div>
            <Facilities />
            <div className={styles.aboutUs}>
              <h2>About Us</h2>
              <p>
                We are a premier service provider dedicated to ensuring the best
                experience for our customers.
              </p>
              <button className={styles.discoverButton}>Discover More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
