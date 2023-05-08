import React from 'react'
import style from './main.module.css';
import {Clock} from 'phosphor-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons';



export default function MainPage() {
  return (
    <div>
        <div className={style.mainContainer}>
          <div>
            <h1 className={style.header}>Chat Response</h1>
            <p className={style.subheader}>Respond to messages, set up automations and more.</p>
          </div>
            

            <div className={style.ava}>
            <div className={style.availability}>
                <Clock size={32} />
                <p>Available</p>
            </div>
            <div className={style.toolsIcon}>
                 <FontAwesomeIcon icon={faScrewdriverWrench} />
            </div>
            </div>

        </div>
    </div>
  )
}
