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
      <Row className="navbar-wrap">
        <Col xs={24} lg={12}>
          <h1>Briquettenesia</h1>
        </Col>
        <Col xs={24} lg={12}>
          <div className={`circle ${isOpen ? "expand" : ""}`} />
          <div className="menu">
            <ul>
              <li className={`${isOpen ? "animate" : ""}`}>
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
              <li className={`${isOpen ? "animate" : ""}`}>
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
              <li className={`${isOpen ? "animate" : ""}`}>
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
              <li className={`${isOpen ? "animate" : ""}`}>
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
      {children}
    </div>
  );
};

export default Navbar;
