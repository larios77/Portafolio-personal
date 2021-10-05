import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import testimonial1 from '../../img/dilan.png'
import testimonial2 from '../../img/alex'
import testimonial3 from '../../img/roy.jpeg'
import { UilStar } from '@iconscout/react-unicons'
import './testimonial.css'

function TestimonialsCarrousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
  }
  return (
    <div>
      <section className="testimonial section">
        <h2 className="section__title">Testimonial</h2>
        <span className="section__subtitle">Ex compañeros dicen</span>
        <div className="testimonial__container container">
          <Slider {...settings}>
            <div>
              {/* <!--==================== TESTIMONIAL 1====================--> */}
              <div className="testimonial__content">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      className="testimonial__img"
                      src={testimonial1}
                      alt="testimonial1"
                    />
                    <div>
                      <h3 className="testimonial__name">Dylan González</h3>
                      <span className="testimonial__workers">
                        Ex compañero de trabajo
                      </span>
                    </div>
                  </div>
                  <div>
                    <UilStar className="testimonial__icon-start" />
                    <UilStar className="testimonial__icon-start" />
                    <UilStar className="testimonial__icon-start" />
                    <UilStar className="testimonial__icon-start" />
                    <UilStar className="testimonial__icon-start" />
                  </div>
                </div>
                <p className="testimonial__description">
                  Por la presente certifico que el Ingeniero de Sistemas Frankie
                  Bendaña Larios, en el transcurso de la años que lo conozco y
                  trabajo con él, doy fe de que en todo este tipo de procesos y
                  Tecnología es una persona que sabe cómo realizar sus trabajos
                  y cargos.
                </p>
              </div>
            </div>
            <div>
              {/* <!--==================== TESTIMONIAL 2====================--> */}
              <div className="testimonial__content">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      className="testimonial__img"
                      src={testimonial2}
                      alt="testimonial2"
                    />
                    <div>
                      <h3 className="testimonial__name">Alex Reyes</h3>
                      <span className="testimonial__workers">
                        Ex compañero de trabajo
                      </span>
                    </div>
                  </div>
                  <div>
                    <UilStar className="testimonial__icon-start" />
                    <UilStar className="testimonial__icon-start" />
                    <UilStar className="testimonial__icon-start" />
                    <UilStar className="testimonial__icon-start" />
                    <UilStar className="testimonial__icon-start" />
                  </div>
                </div>
                <p className="testimonial__description">
                  Soy Alex Reyes, desarrollador front-end, tuve el placer de
                  conocer a Frankie Larios en un trabajo anterior, en el que ha
                  realizado un excelente trabajo como desarrollador front-end,
                  muy dedicado y dedicado a las tareas que se le asignan en su
                  trabajo.
                </p>
              </div>
            </div>
            <div>
              {/* <!--==================== TESTIMONIAL 3====================--> */}
              <div className="testimonial__content">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      className="testimonial__img"
                      src={testimonial3}
                      alt="testimonial3"
                    />
                    <div>
                      <h3 className="testimonial__name">Roy Martinez</h3>
                      <span className="testimonial__workers">
                        Ex compañero de trabajo
                      </span>
                    </div>
                  </div>
                  <div>
                    <UilStar className="testimonial__icon-start" />
                    <UilStar className="testimonial__icon-start" />
                    <UilStar className="testimonial__icon-start" />
                    <UilStar className="testimonial__icon-start" />
                    <UilStar className="testimonial__icon-start" />
                  </div>
                </div>
                <p className="testimonial__description">
                  He trabajado con frankie en estos 6 meses en aly system y
                  Considero que es una persona honesta y trabajadora, él cumple
                  sus tareas en el momento deseado, sin más que decir es un buen
                  trabajador.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  )
}
export default TestimonialsCarrousel
