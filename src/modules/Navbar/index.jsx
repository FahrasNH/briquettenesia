import { Col, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = ({ children, className }) => {
  const navbarItems = [
    {
      label: "Home",
      target: "home",
    },
    {
      label: "About Us",
      target: "about",
    },
    {
      label: "Products",
      target: "product",
    },
    {
      label: "Contact",
      target: "contact",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  function openMenu() {
    setOpen(!isOpen);
  }
  return (
    <div className={className}>
      <Row className="navbar-wrap">
        <Col xs={24} sm={24} md={24} lg={6}>
          <h1>Briquettenesia</h1>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <div className="menu">
            <ul>
              <li>
                <Link
                  to="principle"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Principles
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="product"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <div className="burger" onClick={openMenu}>
        <div
          className={`x ${isOpen ? "collapse rotate30 rotate45" : ""}`}
        ></div>
        <div
          className={`y ${isOpen ? "collapse" : ""}`}
          style={{ display: isOpen ? "none" : "block" }}
        ></div>
        <div
          className={`z ${isOpen ? "collapse rotate125 rotate140" : ""}`}
        ></div>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
