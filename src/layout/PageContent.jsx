import { Footer } from "./Footer";
import { Header } from "./Header";

export const PageContent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
