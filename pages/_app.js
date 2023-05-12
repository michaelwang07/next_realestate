import '@/styles/globals.css';
import Head from 'next/head';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Real Estate</title>
    </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ChakraProvider>
    </>
  )
}
