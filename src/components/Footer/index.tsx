import { ContainerClient, ContainerContact } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaLocationArrow,
} from "react-icons/fa6";
import { feedback } from "../../database/feedback";

function Footer() {
  return (
    <>
      <ContainerClient>
        <div>
          <h1>O que meus clientes dizem?</h1>
        </div>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
          >
            {feedback.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.image} alt="Slider" className="slide-item" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ContainerClient>
      <ContainerContact>
        <ul>
          <h1>DR. FLÁVIO</h1>
        </ul>
        <ul>
          <h1>FALE CONOSCO</h1>
          <p>
            {" "}
            <FaWhatsapp /> WhatsApp: (21){" "}
          </p>
          <p>
            {" "}
            <FaPhone /> Telefone: (21)
          </p>
          <p>
            {" "}
            <FaLocationArrow /> Endereço: Avenida Bartolomeu de Gusmão 1100
            Fundos
          </p>
          <p>
            {" "}
            <FaInstagram /> Instagram:{" "}
          </p>
        </ul>
      </ContainerContact>
    </>
  );
}

export { Footer };
