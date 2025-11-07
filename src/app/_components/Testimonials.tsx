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
import tutor1 from "@/tutor1.png";
import tutor2 from "@/tutor2.jpg";
import tutor3 from "@/tutor3.jpg";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Meu computador estava travando e reiniciando o tempo todo, achei que teria que comprar outro. O suporte foi super rápido, identificaram o problema e resolveram no mesmo dia! Agora está rodando como novo.",
    author: "Fernanda Costa",
    role: "Empresária – Suporte Técnico Remoto",
    image: tutor2,
  },
  {
    content:
      "Precisei de ajuda urgente com o sistema da minha empresa e o atendimento remoto foi excelente. O técnico acessou meu PC em minutos e resolveu tudo sem precisar sair do escritório. Atendimento profissional e ágil!",
    author: "Lucas Andrade",
    role: "Cliente – Manutenção de Computadores",
    image: tutor1,
  },
  {
    content:
      "Perdi vários arquivos importantes de um projeto e achei que não teria mais volta. A equipe conseguiu recuperar tudo e ainda configurou um backup automático para evitar novos problemas. Serviço impecável!",
    author: "João Pereira",
    role: "Freelancer – Recuperação de Dados",
    image: tutor3,
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#E84C3D] py-16">
      <div className="container mx-auto px-4 ">
        <h2
          className="text-4xl font-bold mb-12 text-center"
          data-aos="zoom-in-down"
        >
          Depoimentos dos nossos clientes
        </h2>
        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-3"
                  data-aos="zoom-in-up"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4 ">
                      <div className="relative w-24 h-24 ">
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          quality={100}
                          sizes="96px"
                          className="object-cover rounded-full"
                        />
                      </div>
                      <p className="text-gray-200">{item.content}</p>

                      <div>
                        <p className="font-bold">{item.author}</p>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="cursor-pointer bg-white hover:bg-gray-200 flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-9 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={scrollNext}
            className="cursor-pointer bg-white hover:bg-gray-200 flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-1 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
