import React from 'react'
import styles from './main.module.css'
import {Clock} from 'phosphor-react'

export default function MainPage() {
  return (
    <div>
        <div className={styles.container}>
            <h1 className={styles.header}>Chat Response</h1>
            <p className={styles.subheader}>Respond to messages, set up automations and more.</p>

            <div className={styles.ava}>
            <div className={styles.availability}>
                <Clock size={32} />
                <p>Available</p>
            </div>
            <div className={styles.toolsIcon}>
                <Clock size={32} /> 
            </div>
            </div>
            

        </div>
    </div>
  )
}
