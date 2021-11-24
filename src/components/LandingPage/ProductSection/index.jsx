import {
  Row, Col
} from 'antd'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import React from "react"
 
const ProductSection = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const datas = [{
    id: '1',
    img: require('../../../assets/images/cube.png'),
    title: 'Coconut Shell Charcoal Briquette',
    content: [
      '27x27x27 mm (56 pcs per 1 kg)',
      '20x20x20 mm (120 pcs per 1 kg).',
      '26x26x26 mm (64 pcs per 1 kg).',
      '25x25x25 mm (72 pcs per 1 kg).',
      '22x22x22 mm (96 pcs per 1 kg).'
    ],
  }, {
    id: '2',
    img: require('../../../assets/images/hexagonal.png'),
    title: 'Coconut Shell Charcoal Briquette',
    content: [
      '27x27x27 mm (56 pcs per 1 kg)',
      '20x20x20 mm (120 pcs per 1 kg).',
      '26x26x26 mm (64 pcs per 1 kg).',
      '25x25x25 mm (72 pcs per 1 kg).',
      '22x22x22 mm (96 pcs per 1 kg).'
    ],
  }, {
    id: '3',
    img: require('../../../assets/images/pillow.png'),
    title: 'Coconut Shell Charcoal Briquette',
    content: [
      '27x27x27 mm (56 pcs per 1 kg)',
      '20x20x20 mm (120 pcs per 1 kg).',
      '26x26x26 mm (64 pcs per 1 kg).',
      '25x25x25 mm (72 pcs per 1 kg).',
      '22x22x22 mm (96 pcs per 1 kg).'
    ],
  }, {
    id: '4',
    img: require('../../../assets/images/removebg-preview.png'),
    title: 'Coconut Shell Charcoal Briquette',
    content: [
      '27x27x27 mm (56 pcs per 1 kg)',
      '20x20x20 mm (120 pcs per 1 kg).',
      '26x26x26 mm (64 pcs per 1 kg).',
      '25x25x25 mm (72 pcs per 1 kg).',
      '22x22x22 mm (96 pcs per 1 kg).'
    ],
  }]
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
    
  })
  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])
  return (
    <div className="section-wrap">
      <h1 className="section-title">Type Of Products</h1>
        <Row>
            <div ref={sliderRef} className="keen-slider">  
              {datas.map(data => (
                <Col className="list-product" span={23}>
                  <div className="keen-slider__slide number-slide1">
                    <Col span={15}>
                      <img className="img-product" src={data.img} alt="" />
                    </Col>
                    <div>
                      <h3>{data.title}</h3>
                        <ul>
                          {data.content.map((con, idx) => <li>{con}</li>)}
                        </ul>
                    </div>
                  </div>
                </Col> 
              ))}
            </div>
            {slider && (
              <div className="dots">
                {[...Array(slider.details().size).keys()].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        slider.moveToSlideRelative(idx)
                      }}
                      className={"dot" + (currentSlide === idx ? " active" : "")}
                    />
                  )
                })}
              </div>
            )}
          </Row> 
    </div>
  )
}
export default ProductSection