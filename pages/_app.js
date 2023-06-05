import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Head from 'next/head';



export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        {/* <title>Pairmony</title> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./camera.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );

}
