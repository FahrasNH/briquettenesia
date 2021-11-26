import React from 'react'
import { Row, Col, Input, Button } from 'antd'

const HeaderSection = () => {
  const datas = [
    {
      id: "1",
      img: require("../../../assets/images/cube.png"),
    },
    {
      id: "2",
      img: require("../../../assets/images/hexagonal.png"),
    },
    {
      id: "3",
      img: require("../../../assets/images/pillow.png"),
    },
  ];

  return (
    <Row className="header-wrap">
      <Col span={12}>
        <h1 className="header-title">
          Manufacturing the finest coconut shell charcoal briquettes
        </h1>
        <p className="desc">
          A leading manufacturer and exporter of 100% coconut shell charcoal
          briquettes, from Indonesia. We control every step of the manufacturing
          and quality control process of our briquettes, from coconut shell
          selection, cleaning and carbonization all the way through to final
          briquetting, drying and packaging.
        </p>
        <Row className="wrap-sendEmail">
          <Col span={18}>
            <Input
              size="large"
              placeholder="Enter your email"
              autoComplete="off"
              bordered={false}
              prefix={
                <img
                  src={require('../../../assets/icons/message.svg')}
                  alt="Message"
                />
              }
            />
          </Col>
          <Col span={6} className="col-btn">
            <Button className="order-btn">Order Now</Button>
          </Col>
        </Row>
      </Col>
      <Col>
        {/* Slider */}
      </Col>
    </Row>
  )
}
export default HeaderSection
