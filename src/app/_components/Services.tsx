"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Laptop,
  Network,
  HardDrive,
  ShieldCheck,
  Clock,
  Cpu,
} from "lucide-react";

import { WhatsappLogoIcon } from "@phosphor-icons/react";

const services = [
  {
    tittle: "Manutenção de Computadores",
    description:
      "Diagnóstico completo e reparo de computadores e notebooks. Inclui limpeza interna, troca de peças, otimização de desempenho e formatação com backup seguro.",
    duration: "1h a 2h",
    price: "Sob orçamento",
    icon: <Laptop />,
    linkText:
      "Olá! Vi no site sobre manutenção de computadores e gostaria de mais informações.",
  },
  {
    tittle: "Suporte Técnico Remoto",
    description:
      "Atendimento online rápido para resolver problemas de sistema, instalação de softwares, configuração de impressoras e remoção de vírus sem precisar sair de casa.",
    duration: "30min a 1h",
    price: "A partir de R$60",
    icon: <Cpu />,
    linkText:
      "Olá! Vi no site sobre o suporte técnico remoto e gostaria de saber mais.",
  },
  {
    tittle: "Configuração de Redes",
    description:
      "Instalação e configuração de roteadores, Wi-Fi, cabeamento e compartilhamento de arquivos para residências e empresas. Garantimos estabilidade e segurança da conexão.",
    duration: "2h a 4h",
    price: "Sob orçamento",
    icon: <Network />,
    linkText:
      "Olá! Vi no site sobre configuração de redes e gostaria de solicitar um orçamento.",
  },
  {
    tittle: "Backup e Recuperação de Dados",
    description:
      "Recuperamos arquivos apagados e criamos sistemas de backup automáticos para proteger seus dados contra falhas, formatações ou ataques cibernéticos.",
    duration: "Variável",
    price: "Sob orçamento",
    icon: <HardDrive />,
    linkText:
      "Olá! Vi no site sobre backup e recuperação de dados e gostaria de saber mais.",
  },
  {
    tittle: "Segurança Digital",
    description:
      "Proteção completa contra vírus, malwares e invasões. Implementamos antivírus profissionais e políticas de segurança para garantir a integridade dos seus sistemas.",
    duration: "1h a 3h",
    price: "Sob orçamento",
    icon: <ShieldCheck />,
    linkText:
      "Olá! Vi no site sobre segurança digital e quero mais informações.",
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

export default Services;
