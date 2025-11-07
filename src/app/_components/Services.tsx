"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react";

import { WhatsappLogoIcon } from "@phosphor-icons/react";

const services = [
  {
    tittle: "Banho & Tosa",
    description:
      "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada)",
    duration: "1H",
    price: "$50",
    icon: <Scissors />,
    linkText:
      "Olá, vi no site sobre o Banho e tosa e gostaria de mais informações.",
  },
  {
    tittle: "Consulta Veterinária",
    description:
      "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias, entre outros.",
    duration: "1H",
    price: "$45",
    icon: <Syringe />,
    linkText:
      "Olá, vi no site sobre a Consulta veterinária e gostaria de mais informações.",
  },
  {
    tittle: "Táxi Pet",
    description:
      "Serviço de transporte para levar e buscar os pets no petshop, clpinicas veterinárias ou outros locais. ideal para tutores que não tem tempo ou transporte adequado para locomover os animais.",
    duration: "2H",
    price: "$80",
    icon: <CarTaxiFront />,
    linkText: "Olá, vi no site sobre o taxi pet e gostaria de saber mais.",
  },
  {
    tittle: "Pets Hotel",
    description:
      "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros e confortáveis.",
    duration: "1d à 7d",
    price: "$120 à $840",
    icon: <Hotel />,
    linkText: "Olá, vi no site sobre o Pets hotel e gostaria de saber mais.",
  },
];

const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold mb-12" data-aos="fade-right">
          Serviços
        </h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  data-aos="zoom-in"
                  data-aos-delay={`${index}00`}
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3 "
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3 ">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1 select-none">
                            {item.tittle}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>

                      <a
                        target="_blanck"
                        href={`https://wa.me/21999922459?text=${item.linkText}`}
                        className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
                      >
                        <WhatsappLogoIcon className="w-5 h-5" />
                        Entrar em contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="cursor-pointer bg-white hover:bg-gray-200 flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={scrollNext}
            className="cursor-pointer bg-white hover:bg-gray-200 flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-5 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
