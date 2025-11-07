import royal from "@/royal.png";
import golden from "@/golden.png";
import primier from "@/primier.png";
import natural from "@/natural.png";
import whiskas from "@/whiskas.png";
import Image from "next/image";
import {
  GithubLogoIcon,
  InstagramLogoIcon,
  WhatsappLogoIcon,
  FacebookLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
];

const Footer = () => {
  return (
    <section className="bg-[#e84c3d] py-16 text-white ">
      <div className="conttainer px-4 mx-auto ">
        <div className="border-b border-white/20 pb-8">
          <h2
            className="text-3xl font-semibold mb-8 text-center"
            data-aos="zoom-in-up"
          >
            Marcas que trabalhamos
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
                  width={100}
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
            <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor e dedicação.
            </p>
            <a
              target="_blanck"
              href="https://wa.me/21999922459?text=Olá vim pelo site e gostaria de mais informações."
              className="bg-green-500 px-4 py-2 rounded-md"
            >
              Contato via Whatsapp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: teste@email.com</p>
            <p>Telefone: +55 (21) 99991-5421</p>
            <p>Rua X, Centro, Campo Grande | RJ</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            <div className="flex gap-4 ">
              <a href="" target="_blank">
                <InstagramLogoIcon className="w-8 h-8" />
              </a>
              <a href="#" target="_blank">
                <FacebookLogoIcon className="w-8 h-8" />
              </a>
              <a href="https://github.com/tenmenezes" target="_blank">
                <GithubLogoIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
