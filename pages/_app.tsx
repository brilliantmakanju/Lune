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
      <motion.div
        // className="h-screen   xl:container lg:mx-auto xl:w-[200vw]  "
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit={"exitState"}
        transition={{
          duration: 0.25,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}
