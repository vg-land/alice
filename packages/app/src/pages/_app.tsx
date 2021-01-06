import { Provider } from "next-auth/client"
import { AppProps } from "next/app"
import "@/styles/globals.scss"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    // <Provider session={pageProps?.session}>
      <Component {...pageProps} />
    // </Provider>
  )
}

export default MyApp
