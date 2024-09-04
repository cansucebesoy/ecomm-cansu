import { ToastContainer } from "react-toastify";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const PageContent = ({ children }) => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme="light"
      />
      <Header />
      {children}
      <Footer />
    </>
  );
};
