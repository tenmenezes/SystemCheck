import Image from "next/image";
import about1Img from "@/about1.jpg";
import about2Img from "@/about2.jpg";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

const About = () => {
  return (
    <section className="bg-[#fdf6ec] py-16 ">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="placa mãe"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 border-white overflow-hidden rounded-3xl ">
              <Image
                src={about2Img}
                alt="segurança"
                fill
                quality={100}
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2
              className="text-4xl font-bold"
              data-aos="fade-up-left"
              data-aos-delay="300"
            >
              SOBRE NÓS
            </h2>
            <p data-aos="fade-up-left" data-aos-delay="300">
              Somos especialistas em suporte técnico e manutenção de
              computadores, notebooks e redes. Atuamos com foco em oferecer
              soluções rápidas, seguras e eficazes para empresas e usuários
              domésticos, garantindo o máximo desempenho dos seus sistemas.
            </p>

            <ul
              className="space-y-4"
              data-aos="fade-up-left"
              data-aos-delay="300"
            >
              <li className="flex items-center gap-2 ">
                <Check className="text-red-500" />
                Atendendo clientes desde 2006.
              </li>
              <li className="flex items-center gap-2 ">
                <Check className="text-red-500" />
                Equipe técnica qualificada e em constante atualização.
              </li>
              <li className="flex items-center gap-2 ">
                <Check className="text-red-500" />
                Suporte remoto e presencial em todo o Rio de Janeiro.
              </li>
              <li className="flex items-center gap-2 ">
                <Check className="text-red-500" />
                Compromisso com qualidade, agilidade e segurança.
              </li>
            </ul>
            <div
              className="flex gap-2"
              data-aos="fade-up-left"
              data-aos-delay="300"
            >
              <a
                target="_blanck"
                href="https://wa.me/+5521999922459?text=Olá vim pelo site e gostaria de mais informações."
                className="bg-green-500 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>
              <a
                target="_blanck"
                href="https://www.google.com/maps/place/Casa+da+M%C3%A3e+Joana+GastroLounge/@-22.9183073,-43.4174759,17z/data=!3m1!4b1!4m6!3m5!1s0x9bdf268f2d95bd:0x63eeff2332decc14!8m2!3d-22.9183123!4d-43.414901!16s%2Fg%2F11tp72b8p_?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
