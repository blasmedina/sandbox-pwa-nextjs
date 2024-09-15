import React from "react";
import { APP_TITLE, APP_VERSION } from "@/config/constants";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light text-center py-3">
      <Container>
        <span>
          <strong>{APP_TITLE}</strong> v{APP_VERSION} &copy;{" "}
          {new Date().getFullYear()}. <br />
          Todos los derechos reservados.
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
