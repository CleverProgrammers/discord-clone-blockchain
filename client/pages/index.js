import styles from '../styles/Home.module.css'
import SideBar from '../components/Sidebar'
import ConversationList from '../components/ConversationList'
import ChatView from '../components/ChatView'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.main}>
        <ConversationList />
        <ChatView />
      </div>
    </div>
  )
}
