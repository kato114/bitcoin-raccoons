import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ page, children }) => {
  return (
    <>
      <Header page={page} />
      {children}
      <Footer page={page} />
    </>
  );
};

export default Layout;
