import { ContainerClient, ContainerContact } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FaInstagram, FaWhatsapp, FaLocationArrow } from "react-icons/fa6";
import { feedback } from "../../data/feedback";

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
          <button>
            <a href="https://api.whatsapp.com/send?phone=5521995781792&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Flávio">
             <FaWhatsapp /> FALE COMIGO
            </a>
          </button>
        </ul>
        <ul>
          <h1>FALE CONOSCO</h1>
          <p>
            <FaWhatsapp /> WhatsApp: (21) 99578 - 1792
          </p>
          <p>
            <FaLocationArrow /> Rio de Janeiro, São Cristóvão - Maracanã Fundos
          </p>
          <p>
            <FaInstagram /> Instagram: @dr.flavio
          </p>
        </ul>
      </ContainerContact>
    </>
  );
}

export { Footer };
