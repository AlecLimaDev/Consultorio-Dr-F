import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Container } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { photos } from "../../database/resultados";

function Resultados() {
  return (
    <>
      <Container>
        <figure>
          <h1>RESULTADOS</h1>
        </figure>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
          >
            {photos.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.image} alt="Slider" className="slide-item" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
}

export default Resultados;
