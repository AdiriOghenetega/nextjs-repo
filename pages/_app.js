import '/styles/globals.css'
import Header from "@/layout/head"
import Footer from "@/layout/footer"
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps:{ session, ...pageProps }} ) {

if(Component.getLayout){
  return  Component.getLayout(
     <Component {...pageProps} />

  )
}

  return <SessionProvider session={session}>
  <>
  <Head>
    <title>my nextjs repo</title>
    <meta name="description" conntent="Contains examples of all nextjs core concepts" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  </Head>
<Header />
   <Component {...pageProps} />
   <Footer />
  </>
  </SessionProvider>

}
