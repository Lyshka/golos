"use client";
import { mainMenu } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export const HeaderMobile = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prv) => !prv);
  };

  return (
    <>
      <div className="2xl:hidden block">
        {open ? (
          <IoCloseSharp onClick={toggleMenu} className="w-8 h-8" />
        ) : (
          <GiHamburgerMenu onClick={toggleMenu} className="w-8 h-8" />
        )}
      </div>
      {open && (
        <nav className="h-full w-full fixed bg-black/80 inset-0 top-16 text-white">
          <ul className="container-main flex flex-col gap-4 py-4 bg-zinc-900">
            {mainMenu.map(({ id, title, url }) => (
              <li className="text-xl first-letter:uppercase" key={id}>
                <Link href={url}>{title}</Link>
              </li>
            ))}
            <li>
              <Link
                className="font-semibold"
                href={"mailto:crm@audio-production.ru"}
              >
                crm@audio-production.ru
              </Link>
            </li>

            <li className="flex items-center gap-4">
              <Link
                href={"tel:+74952350501"}
                className="flex items-center gap-2"
              >
                <BsFillTelephoneFill />
                +7 (495) 235 05 01
              </Link>

              <Link
                href={"https://t.me/Audio_Pro_Ru"}
                className="flex items-center gap-2"
              >
                <FaTelegramPlane />
                Telegram
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
