import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global-style";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
