import '../styles/globals.css'
import { DiscordProvider } from '../context/context'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  return (
    <DiscordProvider>
      <Component {...pageProps} />
    </DiscordProvider>
  )
}

export default MyApp
