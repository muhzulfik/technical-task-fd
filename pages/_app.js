import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/organism/Layout";
import theme from "@/theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
