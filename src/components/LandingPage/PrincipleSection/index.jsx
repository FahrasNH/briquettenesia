import {
   Row, Col
} from 'antd'

const PrincipleSection = () => {
    return (
      <div className="section-wrap">
        <h1 className="section-title">Our Guiding Principles</h1>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div className="card-title">We Act Responsibly</div>
            <hr />
            <div className="wrap-img">
              <img src={require('../../../assets/icons/skill-development.png')} alt="Responsibly"/>
            </div>
            <p className="decs">For us, integrity means we do what we say we are going to do. Ultimately we aren’t just building a company, we’re building a family. So we uphold the highest standards of honesty in all of our actions.</p>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="card-title">We Grow Up Together</div>
            <hr />
            <div className="wrap-img">
              <img src={require('../../../assets/icons/performance.png')} alt="Together"/>
            </div>
            <p className="decs">We take pride in providing high value products and services that we stand behind, which ensures customer satisfaction, profitability and the future of our growth.</p>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="card-title">We Honor Our Commitments</div>
            <hr />
            <div className="wrap-img">
              <img src={require('../../../assets/icons/hand-shake.png')} alt="Commitments"/>
            </div>
            <p className="decs">We are committed to being the best we can be. In order to achieve this, we place the customer at the center of everything we do.</p>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="card-title">We Strive For Excellence</div>
            <hr />
            <div className="wrap-img">
              <img src={require('../../../assets/icons/quality.png')} alt="Excellence"/>
            </div>
            <p className="decs">Indonesia is a potential country. Being the leading in export scale, we constantly look to improve our product and service, cultivating our knowledge, skill, and attitudes to achieve excellence.</p>
          </Col>
        </Row>
      </div>
    )
}

export default PrincipleSection