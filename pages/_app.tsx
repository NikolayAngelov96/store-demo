import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
