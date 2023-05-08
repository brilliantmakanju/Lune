import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <motion.div
      className="lg:container lg:mx-auto relative "
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
      <Nav />
      {children}
      <Footer />
    </motion.div>
  );
};

export default Layout;
