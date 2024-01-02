import { volumeWhite } from "@/assets/img";
import { Line } from "@/assets/img/levitation/Line";
import { Line2 } from "@/assets/img/levitation/Line2";
import Image from "next/image";
import { ListCategory } from "./ListCategory";

export const Category = () => {
  return (
    <section className="relative bg-[#26075b] 2xl:h-[1100px] flex justify-center items-center">
      <Line className="absolute top-0 z-10 -scale-x-100" />

      <div className="container-main flex flex-col justify-center items-center gap-16 py-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="first-letter:uppercase font-semibold text-3xl text-white">
            Взрослые дяди и тёти
          </h2>
          <Image
            className="mt-6"
            src={volumeWhite}
            alt="аудио дорожка"
            width={75}
            height={16}
          />
        </div>

        <ListCategory />
      </div>

      <Line2 className="absolute bottom-0 z-10 rotate-180 -scale-x-100" />
    </section>
  );
};
