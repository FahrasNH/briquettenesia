import React from "react";
import { Row, Col, Input, Button } from "antd";
import Slider from "../../../modules/Slider";

const HeaderSection = () => {
  const datas = [
    {
      id: "1",
      img: require("../../../assets/images/briquette1.png"),
    },
    {
      id: "2",
      img: require("../../../assets/images/briquette2.png"),
    },
    {
      id: "3",
      img: require("../../../assets/images/briquette3.png"),
    },
    {
      id: "4",
      img: require("../../../assets/images/briquette4.png"),
    },
  ];

  return (
    <Row className="header-wrap">
      <Col xs={24} sm={24} md={24} lg={12}>
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
          <Col className="sendmail" xs={15} sm={16} md={17} lg={18}>
            <Input
              size="large"
              placeholder="Enter your email"
              autoComplete="off"
              bordered={false}
              prefix={
                <img
                  src={require("../../../assets/icons/message.svg")}
                  alt="Message"
                />
              }
            />
          </Col>
          <Col xs={9} sm={8} md={7} lg={6} className="col-btn sendmail">
            <Button className="order-btn">Order Now</Button>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12}>
        <Slider>
          {datas.map((data) => (
            <div
              key={data.id}
              className={`keen-slider__slide number-slide${data.id}`}
            >
              <img className="img-header" src={data.img} alt="" />
            </div>
          ))}
        </Slider>
      </Col>
    </Row>
  );
};
export default HeaderSection;
