import { Row, Col, Input, Button } from "antd";

const { TextArea } = Input;

const ContactSection = () => {
  return (
    <div className="section-wrap" id="contact">
      <h3 className="title-contact">Let's Talk</h3>
      <Row gutter={48} className="row-contact">
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="content-contact">
            <p>
              We are excited to help you re-emerge and supporting you with
              Indonesian best coconut charcoal briquette and derivates. Our
              business is built on connectivity and trust, we are here for you{" "}
              <br />
              Whether your needs are to have specific briquette content, we will
              help you to crafted as requested.
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="contact-form">
            <p>Send us your details and get free* sample!</p>
            <div className="input-text">
              <Input type="text" name="name" placeholder="Your Name*" />
            </div>
            <div className="input-text">
              <Input
                type="text"
                name="number"
                placeholder="Whatsapp / Number*"
              />
            </div>
            <div className="input-text">
              <Input type="text" name="email" placeholder="Email*" />
            </div>
            <div className="input-text">
              <Input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="input-area">
              <TextArea
                name="message"
                cols="30"
                rows="5"
                placeholder="Message"
              />
            </div>
            <Button className="btn">SEND</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactSection;
