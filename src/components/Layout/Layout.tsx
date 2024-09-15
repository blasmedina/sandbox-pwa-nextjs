import React from "react";
import { Container } from "react-bootstrap";
import OrientationBlocker from "../OrientationBlocker/OrientationBlocker";
import NavMain from "../NavMain/NavMain";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <OrientationBlocker>
      <NavMain />
      <Container as={"main"} className="main-container">
        {children}
      </Container>
      <Footer />
    </OrientationBlocker>
  );
};

export default Layout;
