import Dell from "@/dell-marca.webp";
import Asus from "@/asus-marca.png";
import Intel from "@/intel-marca.png";
import Kingston from "@/kingston-marca.png";
import Logitech from "@/logitech-logo.png";
import ReDragon from "@/redragon-marca.webp";
import Image from "next/image";
import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Dell", logo: Dell },
  { name: "Asus", logo: Asus },
  { name: "Intel", logo: Intel },
  { name: "Kingston", logo: Kingston },
  { name: "Logitech", logo: Logitech },
  { name: "Red Dragon", logo: ReDragon },
];

const Footer = () => {
  return (
    <section className="bg-[#3d40e8] py-16 text-white ">
      <div className="container px-4 mx-auto ">
        <div className="border-b border-white/20 pb-8">
          <h2
            className="text-3xl font-semibold mb-8 text-center"
            data-aos="zoom-in-up"
          >
            Marcas que confiamos
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                data-aos="zoom-in-down"
                data-aos-delay={`${index}00`}
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  quality={100}
                  width={150}
                  height={50}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="grid grid-cols-2 md:grid-cols2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">SystemCheck</h3>
            <p className="mb-4">
              Soluções em suporte técnico, manutenção e otimização de sistemas.
              Cuidamos do seu equipamento como se fosse nosso.
            </p>
            <a
              target="_blanck"
              href="https://wa.me/+5521999922459?text=Olá vim pelo site e gostaria de mais informações."
              className="bg-green-500 px-4 py-2 rounded-md"
            >
              WhatsApp
            </a>
          </div>

          <div className="flex flex-col ">
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p className="text-gray-300">Email: info@gmail.com</p>
            <p className="text-gray-300">Telefone: +55 (21) 99991-5421</p>
            <p className="text-gray-300">
              Av. Cesário de Melo – Campo Grande | RJ
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            <p className="text-gray-300 mb-3">
              Acompanhe dicas, novidades e tutoriais sobre tecnologia:
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/dev_tenmenezes"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <InstagramLogoIcon className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/ten-menezes"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <LinkedinLogoIcon className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/tenmenezes"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <GithubLogoIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>

        <p className="text-center text-gray-400 text-sm border-t border-white/10 pt-6">
          © {new Date().getFullYear()} SystemCheck – Todos os direitos
          reservados.
        </p>
      </div>
    </section>
  );
};

export default Footer;
