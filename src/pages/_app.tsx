import { Header } from '../components/Header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
