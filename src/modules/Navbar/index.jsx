import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-scroll'

const Navbar = ({ children, className }) => {
  const navbarItems = [
    {
      label: 'Home',
      target: 'home',
    },
    {
      label: 'About Us',
      target: 'about',
    },
    {
      label: 'Products',
      target: 'product',
    },
    {
      label: 'Contact',
      target: 'contact',
    },
  ]

  return (
    <div className={className}>
      <Row className="navbar-wrap">
        <Col>
          <h1>Briquettenesia</h1>
        </Col>
        <Col>
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
        </Col>
      </Row>
      {children}
    </div>
  )
}

export default Navbar
