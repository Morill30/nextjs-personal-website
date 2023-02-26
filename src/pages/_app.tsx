import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "flowbite";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jean Morillo Web</title>
        <meta
          name="description"
          content="Personal Website with experience and contact information for Jean Morillo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
