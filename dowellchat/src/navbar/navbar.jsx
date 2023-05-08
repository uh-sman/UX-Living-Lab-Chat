import React from 'react';
import styles from './navbar.module.css'


export default function Navbar() {
  return (
    <div>
        <div className={styles.navbar}>
            <div>
              <h1>UX Living Lab Chat</h1>
            </div>
            <div className={styles.links}>
              <span className={styles.active}>chatresponse</span>
              <span>Glossary</span>
              <span>Home</span>
            </div>
          </div>
    </div>
  )
}
