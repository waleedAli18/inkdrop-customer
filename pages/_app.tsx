import React from "react";
import Head from "next/head";

const App = ({ Component, pageProps }: any) => {
  const getLayout = Component.getLayout || ((page: any) => page);
  return getLayout(
    <>
      <Head>
        <title>InkDrop</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
