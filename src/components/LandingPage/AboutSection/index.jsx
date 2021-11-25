import { Row, Col } from "antd";

const AboutSection = () => {
  return (
    <div className="section-wrap">
      <div className="transform-bg" />
      <h1 className="section-title" style={{ color: "#E5E5E5" }}>
        About Us
      </h1>
      <Row className="row-about">
        <Col>
          <div className="content-about">
            <p className="desc">
              Briquettenesia is a leading manufacturer and exporter of 100%
              coconut shell charcoal briquettes, from Indonesia. We control
              every step of the manufacturing and quality control process of our
              briquettes, from coconut shell selection, cleaning and
              carbonization all the way through to final briquetting, drying and
              packaging. Our production locations are situated in all the major
              coconut harvesting regions of Indonesia in Sumatra, Java and
              Sulawesi. We supply coconut shell charcoal briquettes in bulk and
              can ship to any destination worldwide. We can produce briquettes
              in any desired shape or size and tailor make packaging according
              to our customers exact design preferences.
            </p>

            <p className="desc">
              We insist on producing our own coconut shell charcoal for the
              majority of our briquette production and also working with a few
              select suppliers of high grade charcoal, to ensure that the fixed
              carbon content is high and ash content low. Our briquettes are
              perfect for use in Shisha/hookah or for barbeque, providing very
              high heat, long burn time and minimal ash. Due to the high quality
              charcoal used, our briquettes produce no smoke, odours or sparks
              while being burned.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutSection;
