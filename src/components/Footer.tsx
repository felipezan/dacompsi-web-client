import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMailFilled,
  IconUsersGroup,
} from "@tabler/icons-react";
import { IconPhone } from "@tabler/icons-react";
import dacompsi_logo_branca from "../assets/dacompsi_logo_branca.png";
import { em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Footer = () => {
  const mobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <div className="w-full h-max p-5 px-14 bg-dark-red-dacompsi text-white m-0 flex flex-col gap-5 ">
      <div className="flex flex-col gap-4 sm:gap-2 md:gap-0 sm:flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <img src={dacompsi_logo_branca} alt="logo dacompsi" />
          <span>Nos siga nas Redes Sociais!</span>
          <div className="flex justify-between">
            <IconBrandTwitter
              className="cursor-pointer"
              color="white"
              size={30}
            />
            <IconBrandInstagram
              className="cursor-pointer"
              color="white"
              size={30}
            />
            <IconBrandYoutube
              className="cursor-pointer"
              color="white"
              size={30}
            />
          </div>
        </div>

        <span className="flex items-center text-center font-bold">
          Desenvolvido por alunos, para alunos.
        </span>

        <div className="flex flex-col gap-3 mt-6">
          <span>Entre em contato:</span>
          <span className="flex gap-2">
            <IconMailFilled color="white" />
            dacompsi@gmail.com
          </span>
          <span className="flex gap-2">
            <IconPhone color="white" />
            (31)98475-1455
          </span>
          <span className="flex gap-2">
            <IconUsersGroup />
            Ou passe pela salinha do D.A.
          </span>
        </div>
      </div>

      <div className="flex self-center max-w-[780px] text-center text-gray-500 text-xs sm:text-base">
        Todo o contéudo deste site é de responsabilidade única e exclusiva do
        DAcompsci. Nenhum outro corpo discente se responsabiliza ou guarda
        relação direta ccom qualquer contúdo aqui presente.
      </div>
    </div>
  );
};

export default Footer;
