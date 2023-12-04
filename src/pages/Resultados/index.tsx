import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Container } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";


function Resultados() {
  const photos = [
    { id: "1", image: "https://oraldents.com.br/wp-content/uploads/2022/11/aparelho-ortodontico-antes-e-depois.jpg" },
    { id: "2", image: "https://cdn6.campograndenews.com.br/uploads/noticias/2022/12/21/90f28a74fc1f74f191a436ccdc33fc30df1a34af.jpeg  " },
    {id: "3", image: "https://harmoniafacial.com.br/wp-content/uploads/2022/05/harmonia-facila-antes-depois-05.png"},
  ];

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
                <img 
                    src={item.image} 
                    alt="Slider"
                    className="slide-item"
                    />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
}

export default Resultados;
