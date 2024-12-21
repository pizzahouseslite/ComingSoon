import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div style="width: 100vw; height: 100vh; overflow: hidden;"
    className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>{title} | Themeptation</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Biltvättslite"
      />
      <meta property="og:title" content={`${title} | Themeptation`} />
      <meta
        property="og:description"
        content="Biltvättslite"
      />
      <meta property="og:url" content="https://biltvattslite.se/" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
