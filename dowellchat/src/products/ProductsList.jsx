import React, {useState} from 'react'
import styles from './product.module.css';
import {MagnifyingGlass} from 'phosphor-react';
import {ClipboardText, EnvelopeSimple} from 'phosphor-react';
import firstImage from './images/first.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation, faTrash } from '@fortawesome/free-solid-svg-icons'



export default function Products() {
    const [activeChat, setActiveChat] = useState(null);

    function ChatArea({ chatAreaName }) {
  return (
    <div>
      <h2>{chatAreaName}</h2>
      {/* <p>This is the {chatAreaName} chat area</p> */}
    </div>
  );
}

    function handleClickEvent(ChatArea){
        setActiveChat(ChatArea);
    }

    const WorkFlowAI = () => {
        return(
          
          <div className={styles.workflowContainer}>
            
            <div className={styles.userContainer}>

              <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input  type="search" name="" className={styles.input} placeholder='search'  aria-label="Search"/> <MagnifyingGlass size={32} className={styles.searchIcon} />
                    {/* <input type="text" /> */}
                </form>
            </div>

              <div className={styles.firstUser}>
                <div className={styles.imageContainer}>
                  <img src={firstImage} alt="UserImages" />
                </div>
                <div className={styles.usertexts}>
                  <div className={styles.userName}> <span>Alex Mason</span></div>
                  <div className={styles.userMessage}>You: Hello there!</div>
                </div>
              </div>

              <div className={`${styles.firstUser} ${styles.active}`} >
                <div className={styles.imageContainer}>
                  <img src={firstImage} alt="UserImages" />
                </div>
                <div className={styles.usertexts}>
                  <div className={styles.userName}> <span>John Doe</span></div>
                  <div className={styles.userMessage}>You: Hello there!</div>
                </div>
              </div>

              <div className={styles.firstUser}>
                <div className={styles.imageContainer}>
                  <img src={firstImage} alt="UserImages" />
                </div>
                <div className={styles.usertexts}>
                  <div className={styles.userName}> <span>Alex Mason</span></div>
                  <div className={styles.userMessage}>You: Hello there!</div>
                </div>
              </div>

              <div className={styles.firstUser}>
                <div className={styles.imageContainer}>
                  <img src={firstImage} alt="UserImages" />
                </div>
                <div className={styles.usertexts}>
                  <div className={styles.userName}> <span>Alex Mason</span></div>
                  <div className={styles.userMessage}>You: Hello there!</div>
                </div>
              </div>

              <div className={styles.firstUser}>
                <div className={styles.imageContainer}>
                  <img src={firstImage} alt="UserImages" />
                </div>
                <div className={styles.usertexts}>
                  <div className={styles.userName}> <span>Alex Mason</span></div>
                  <div className={styles.userMessage}>You: Hello there!</div>
                </div>
                 <div className={styles.verticalLine}></div>
              </div>
            </div>

            <div className={styles.chatContainer}>
              <div className={styles.chatBox}>
              <div className={styles.chatHeader}>
                <div className={styles.firstUser}>
                <div className={styles.imageContainer}>
                  <img src={firstImage} alt="UserImages" />
                </div>
                <div className={styles.usertexts}>
                  <div className={styles.userName}> <span>Alex Mason</span></div>
                  <div className={styles.userMessage}>Active Now</div>
                </div>
              </div>
              <div className={styles.iconArea}>
                <ClipboardText size={32} />
               <FontAwesomeIcon icon={faExclamation} style={{ margin: '0 15px' }}/>
               <FontAwesomeIcon icon={faTrash} size='2x1' style={{ margin: '0 15px 0 0' }} />
                <EnvelopeSimple size={32} />
              </div>
              </div>
              <hr style={{ margin: '20px 0 15px' }}/>

              <div className={styles.messageArea}>
                <div className={styles.textArea}>
                  <div className={styles.incomingMessage}>
                  <div className={styles.messageImage}>
                     <img src={firstImage} alt="UserImages" />
                  </div>
                  <span>incoming message</span>
                </div>
                <div className={styles.outgoingMessage} >
                  <span>out going messages</span>
                </div>

                <div className={styles.incomingMessage}>
                  <div className={styles.messageImage}>
                     <img src={firstImage} alt="UserImages" />
                  </div>
                  <span>incoming message</span>
                </div>
                <div className={styles.outgoingMessage} >
                  <span>out going messages</span>
                </div>

                <div className={styles.incomingMessage}>
                  <div className={styles.messageImage}>
                     <img src={firstImage} alt="UserImages" />
                  </div>
                  <span>incoming message</span>
                </div>
                <div className={styles.outgoingMessage} >
                  <span>out going messages</span>
                </div>

                <div className={styles.incomingMessage}>
                  <div className={styles.messageImage}>
                     <img src={firstImage} alt="UserImages" />
                  </div>
                  <span>incoming message</span>
                </div>
                <div className={styles.outgoingMessage} >
                  <span>out going messages</span>
                </div>

                <div className={styles.incomingMessage}>
                  <div className={styles.messageImage}>
                     <img src={firstImage} alt="UserImages" />
                  </div>
                  <span>incoming message</span>
                </div>
                <div className={styles.outgoingMessage} >
                  <span>out going messages</span>
                </div>
                </div>
                
                <div className={styles.formTextaria}>
                  <form className={styles.messageForm}>
                     <textarea  placeholder='Reply in Chat...'></textarea>
                  </form> 
                </div>
              </div>
            </div>
            </div>

          </div>
        )
    }

  return (
    <div className={styles.container}>
        <div className={styles.productlist}>
            <ul className={styles.product}>
                <li onClick={() => handleClickEvent(WorkFlowAI)}>Workflow AI <span>4</span></li>
                <li className={styles.green} onClick={() => handleClickEvent("chat area one")}> Wifi QR Code  <span>4</span></li>
                <li className={styles.pink} onClick={() => handleClickEvent("chat area two")}> User Experience Live <span>4</span></li>
                <li className={styles.green} onClick={() => handleClickEvent("chat area three")}>Social Media Automation</li>
                <li className={styles.white}> Living Lab Scales  <span>4</span></li>
                <li className={styles.green}> Logo Scan</li>
                <li className={styles.pink}> Living Lab Chat  <span>4</span></li>
                <li className={styles.green}> Customer Experience</li>
                <li className={styles.pink}> Living Lab Admin</li>
                <li className={styles.green}> Team Management</li>
                <li className={styles.pink}> Living Lab Monitoring</li>
                <li className={styles.green}> Sales Agent</li>
                <li className={styles.green}> Permutation Calculator</li>
                <li className={styles.white}> DoWell CSC  <span>4</span></li>
                <li className={styles.green}> Secure Repositories</li>
                <li className={styles.green}> Secure Data</li>
            </ul>
        </div> 

        <div className={styles.chatArea}>
      {activeChat && <ChatArea chatAreaName={activeChat} />}
        </div>
    <hr className={styles.hr}/>
    </div>
                

    )
}
