import React from "react";
import { useKeenSlider } from "keen-slider/react";

const Slider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()

  const [sliderRef, slider] = useKeenSlider({
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    loop: true,
    duration: 5000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 5000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <div>
      <div ref={sliderRef} className="keen-slider">
        { children }
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
                className={`dot ${currentSlide === idx ? 'active' : ''}`}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Slider
