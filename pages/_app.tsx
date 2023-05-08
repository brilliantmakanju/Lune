import "@/styles/globals.css";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Layout from "@/components/extensions/Layout";
import { AnimatePresence, motion } from "framer-motion";
import LoginModal from "@/components/models/popup/Login";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <LoginModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </AnimatePresence>
  );
}
