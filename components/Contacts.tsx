"use client";

import { volume } from "@/assets/img";

import { TiMessages } from "react-icons/ti";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoClockFill } from "react-icons/go";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import Image from "next/image";
import Link from "next/link";

export const Contacts = () => {
  return (
    <section className="py-10 flex justify-center items-center bg-white">
      <div className="container-main flex flex-col items-center">
        <h2 className="first-letter:uppercase font-semibold text-3xl">
          Наши контакты
        </h2>
        <Image
          className="mt-6"
          src={volume}
          alt="аудио дорожка"
          width={75}
          height={16}
        />

        <div className="mt-10 flex 2xl:flex-row flex-col-reverse items-center gap-10 justify-center max-w-full overflow-hidden">
          <YMaps
            query={{
              apikey: "3f9e23f5-c411-4d66-a698-9c6faa3595eb",
            }}
            enterprise
          >
            <Map
              width={560}
              height={400}
              defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            />
          </YMaps>

          <div className="flex flex-col gap-4">
            <TiMessages className="w-20 h-14 text-[#28007c] 2xl:self-auto self-center" />
            <p className="font-semibold text-xl">
              Audio-Production.ru всегда на связи
            </p>

            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  className="flex items-center gap-4 group"
                  href={"mailto:crm@audio-production.ru"}
                >
                  <IoMail className="text-[#28007c] w-5 h-5" />{" "}
                  <span className="text-sm font-semibold group-hover:text-[#28007c]">
                    crm@audio-production.ru
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-4 group"
                  href={"tel:+74952350501"}
                >
                  <BsFillTelephoneFill className="text-[#28007c] w-5 h-5" />{" "}
                  <span className="text-sm font-semibold group-hover:text-[#28007c]">
                    +74952350501
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-4 group"
                  href={"https://wa.me/74952350501"}
                >
                  <FaWhatsapp className="text-[#28007c] w-5 h-5" />{" "}
                  <span className="text-sm font-semibold group-hover:text-[#28007c]">
                    WhatsApp
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-4 group"
                  href={"https://t.me/Audio_Pro_Ru"}
                >
                  <FaTelegram className="text-[#28007c] w-5 h-5" />{" "}
                  <span className="text-sm font-semibold group-hover:text-[#28007c]">
                    Telegram
                  </span>
                </Link>
              </li>
            </ul>

            <button className="rounded-full px-4 py-2 bg-[#dd3333] hover:scale-110 transition-all duration-300 text-white flex items-center gap-2 2xl:w-fit w-full justify-center">
              <GoClockFill className="w-4 h-4" /> Почасовая аренда студии
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
