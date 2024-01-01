import { baby } from "@/assets/img";
import { Line } from "@/assets/img/upBlock/Line";
import Image from "next/image";

export const UpBlock = () => {
  return (
    <section className="h-[600px] relative text-white">
      <div className="bg-black/20 h-full absolute inset-0 flex justify-center items-center">
        <div className="container-main">
          <span className="2xl:inline hidden absolute top-2 text-sm">
            Дикторы для озвучки - Детские голоса, дети-дикторы, детская озвучка
            - Голос малыша для гендерной вечеринки
          </span>

          <div className="w-full flex flex-col justify-center gap-4 items-center">
            <h1 className="2xl:text-7xl text-4xl text-center font-semibold">Голос малыша</h1>
            <p className="2xl:text-2xl text-lg text-center">
              Запишем голос малыша для гендерной вечеринки, семейного видео или
              рекламного ролика
            </p>
          </div>
        </div>
      </div>
      <Image
        className="w-full object-cover h-[600px] fixed -z-10"
        src={baby}
        alt="Задий фон"
        height={500}
      />

      <Line className="2xl:block hidden absolute bottom-0 rotate-180 h-40 w-[150%] right-0" />
    </section>
  );
};
