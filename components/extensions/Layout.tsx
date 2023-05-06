import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen md:container md:mx-auto xl:px-30 max-w-6xl  ">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
