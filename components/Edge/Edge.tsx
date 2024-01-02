import { arrowDown, volume } from "@/assets/img";
import Image from "next/image";
import { ListEdge } from "./ListEdge";

export const Edge = () => {
  return (
    <section className="flex justify-center items-center bg-white py-10">
      <div className="container-main flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="first-letter:uppercase font-semibold text-3xl text-center">
            Audio-Production.ru — Это то, что звучит!
          </h2>
          <Image
            className="mt-6"
            src={volume}
            alt="аудио дорожка"
            width={75}
            height={16}
          />
        </div>

        <ListEdge />

        <div className="relative flex flex-col items-center gap-6">
          <p className="font-semibold text-center max-w-xl">
            Оставьте номер телефона. Все расскажем и сделаем лучшее предложение
            на рынке по честной цене без скрытых комиссий и переплат
          </p>

          <Image className="absolute top-1/2 left-[10%]" src={arrowDown} alt="вниз" />

          <button className="bg-[#dd3333] px-8 py-5 rounded-full w-fit text-white">
            Хочу знать точную стоимость
          </button>
        </div>
      </div>
    </section>
  );
};
