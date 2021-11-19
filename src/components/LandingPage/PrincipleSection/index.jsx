import {
   Row, Col, Divider
} from 'antd'

const PrincipleSection = () => {
    return (
      <>
        <h1>Our Guiding Principles</h1>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div>We Act Responsibly</div>
            <Divider />
          </Col>
          <Col className="gutter-row" span={6}>
            <div>We Grow Up Together</div>
            <Divider />
          </Col>
          <Col className="gutter-row" span={6}>
            <div>We Honor Our Commitments</div>
            <Divider />
          </Col>
          <Col className="gutter-row" span={6}>
            <div>We Strive For Excellence</div>
            <Divider />
          </Col>
        </Row>
      </>
    )
}

export default PrincipleSection