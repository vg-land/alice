import { AppProps } from "next/dist/next-server/lib/router/router"
import "src/styles/globals.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
