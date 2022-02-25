import Image from 'next/image'
import styles from '../styles/messageCard.module.css'

const MessageCard = ({ avatar, sender, timestamp, content }) => {
  return (
    <div className={styles.messageCard}>
      <div className={styles.messageAvatarContainer}>
        <Image
          height={40}
          width={40}
          src={avatar}
          className={styles.messageAvatar}
          alt={sender}
        />
      </div>

      <div>
        <div className={styles.messageDetails}>
          <p className={styles.sender}>{sender}</p>
          <small className={styles.timestamp}>{timestamp}</small>
        </div>
        <p className={styles.messageText}>{content}</p>
      </div>
    </div>
  )
}

export default MessageCard
