import React from "react";
import Link from "next/link";
import { APP_ROUTE_DICTIONARY, APP_TITLE, OPTIONS } from "@/config/constants";
import { useRouter } from "next/router";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavMain = () => {
  const router = useRouter();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Link href={APP_ROUTE_DICTIONARY.home.href} passHref legacyBehavior>
          <Navbar.Brand>{APP_TITLE}</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            {OPTIONS.map((option) => (
              <Link
                key={`option-${option.href}`}
                href={option.href}
                passHref
                legacyBehavior
              >
                <Nav.Link active={router.asPath === option.href}>
                  {option.icon && <option.icon className="fs-5 mb-1 me-1" />}
                  <span>{option.title}</span>
                </Nav.Link>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMain;
