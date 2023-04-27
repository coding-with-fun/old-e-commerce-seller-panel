import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className="h-screen">
        <Navbar />

        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </SessionProvider>
  );
}
