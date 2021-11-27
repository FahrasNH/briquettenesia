import { Row, Col } from "antd";

const ContactSection = () => {
  return (
    <div className="section-wrap" id="contact">
      <h3 className="title-contact">Let's Talk</h3>
      <Row>
        <Col span={12}>
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
        <Col span={12}>
          <div className="contact-form">
            <p>Send us your details and get free* sample!</p>
            <div className="input-text">
              <input type="text" name="name" placeholder="YourName*" />
            </div>
            <div className="input-text">
              <input type="text" name="number" placeholder="Whatsapp/Number*" />
            </div>
            <div className="input-text">
              <input type="text" name="email" placeholder="Emai*" />
            </div>
            <div className="input-text">
              <input type="text" name="subject" placeholder="subject" />
            </div>
            <div>
              <textarea
                name="message"
                id="msg"
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
            <a className="btn">SEND</a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactSection;
