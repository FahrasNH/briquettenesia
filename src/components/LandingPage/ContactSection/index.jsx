import { Row, Col } from "antd";

const ContactSection = () => {
  return (
    <div className="section-wrap">
      <h3 className="title-contact">Let's Talk</h3>
      <Row>
        <Col span={12}>
          <div className="content-contact">
            <p>
              We are excited to help you re-emerge and supporting you with
              Indonesian best coconut charcoal briquette and derivates. Our
              business is built on connectivity and trust, we are here for you.
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
              <input type="text" name="name" placeholder="YourName*" />
            </div>
            <div className="input-text">
              <input type="text" name="email" placeholder="Emai*" />
            </div>
            <div className="input-text">
              <input type="text" name="subject" placeholder="subject" />
            </div>
            <div className="input-text">
              <textarea
                name="message"
                id="Message"
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
    /* <h1>Let's Talk</h1>
          <div className="desc-contact">
        <Col span={12} col-12>

        </Col>     
          </div> */
  );
};

export default ContactSection;
