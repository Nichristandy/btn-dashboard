import "@/styles/globals.css";

import { IBM_Plex_Sans } from "@next/font/google";
import { Nunito_Sans, Roboto } from "@next/font/google";

const sans = IBM_Plex_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
