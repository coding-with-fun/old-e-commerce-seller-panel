import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <main className="h-screen">
        <Navbar />

        <Component {...pageProps} />
      </main>
    </Fragment>
  );
}
