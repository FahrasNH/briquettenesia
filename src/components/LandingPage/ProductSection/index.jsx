import React from 'react'
import { Row, Col } from 'antd'
import Slider from '../../../modules/Slider'

const ProductSection = () => {
  const datas = [
    {
      id: '1',
      img: require('../../../assets/images/cube.png'),
      title: 'Cube Charcoal Briquette',
      content: [
        '27x27x27 mm (56 pcs per 1 kg)',
        '20x20x20 mm (120 pcs per 1 kg).',
        '26x26x26 mm (64 pcs per 1 kg).',
        '25x25x25 mm (72 pcs per 1 kg).',
        '22x22x22 mm (96 pcs per 1 kg).',
      ],
    },
    {
      id: '2',
      img: require('../../../assets/images/hexagonal.png'),
      title: 'Hexagonal Charcoal Briquette',
      content: ['20x35 mm (94 pcs per 1 kg).', '20x20 mm (64 pcs per 1 kg).'],
    },
    {
      id: '3',
      img: require('../../../assets/images/pillow.png'),
      title: 'Pillow Charcoal Briquette',
      content: ['50x50x25 mm (50 pcs per 1 kg)'],
    },
    {
      id: '4',
      img: require('../../../assets/images/cylinder.png'),
      title: 'Cylinder Charcoal Briquette',
      content: [
        '18x50 mm (72 pcs per 1 kg).',
        '18x35 mm (102 pcs per 1 kg).',
        '20x50 mm (64 pcs per 1 kg).',
        '20x35 mm (94 pcs per 1 kg).',
      ],
    },
  ]

  return (
    <div className="section-wrap" id="product">
      <h1 className="section-title">Type Of Products</h1>
      <div className="slider-wrap">
        <Slider>
          {datas.map((data) => (
            <Row key={data.id} className="keen-slider__slide number-slide1">
              <Col span={15}>
                <img className="img-product" src={data.img} alt="" />
              </Col>
              <Col span={9}>
                <h3 className="title-product">{data.title}</h3>
                <ul>
                  {data.content.map((con, idx) => (
                    <li key={idx}>{con}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default ProductSection
