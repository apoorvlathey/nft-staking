import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import Layout from "../components/Layout";
import { Web3Provider } from "../contexts/Web3Context";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>nft-staking</title>
      </Head>
      <Web3Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3Provider>
    </ChakraProvider>
  );
}

export default MyApp;
