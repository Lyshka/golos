import { logo, phone, telegram } from "@/assets/img";
import { mainMenu } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center divide-y sticky top-0 bg-white z-50">
      <div className="container-main flex items-center justify-between py-4 ">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="лого"
            width={210}
            height={64}
            className="2xl:w-36 w-28"
          />
        </Link>

        <HeaderMobile />

        <div className="2xl:flex hidden items-center divide-x text-sm">
          <Link
            className="px-2 font-semibold"
            href={"mailto:crm@audio-production.ru"}
          >
            crm@audio-production.ru
          </Link>

          <Link
            href={"tel:+74952350501"}
            className="flex items-center gap-1 px-2"
          >
            <Image src={phone} alt="Телефон" width={24} height={24} />
            +7 (495) 235 05 01
          </Link>

          <Link
            href={"https://t.me/Audio_Pro_Ru"}
            className="flex items-center gap-1 pl-2"
          >
            <Image src={telegram} alt="телеграмм" width={24} height={24} />
            Telegram
          </Link>
        </div>
      </div>

      <nav className="2xl:block hidden container-main py-4">
        <ul className="flex gap-8 items-center">
          {mainMenu.map(({ id, title, url }) => (
            <li className="uppercase text-sm hover:text-blue-400" key={id}>
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
