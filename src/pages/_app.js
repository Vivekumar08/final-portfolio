import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Montserrat, Monsieur_La_Doulaise } from "next/font/google"
import Head from 'next/head'


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})
const monsieur_La_Doulaise = Monsieur_La_Doulaise({
  subsets: ["latin"],
  variable: "--font-monsieur",
  weight: '400'
})

export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <meta name='viewport' content='width=device=widht, initial-scale-1' />
    </Head>
    <main className={`${montserrat.variable} ${monsieur_La_Doulaise.variable} bg-light dark:bg-dark font-mont`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </main>
  </>
  )
}
