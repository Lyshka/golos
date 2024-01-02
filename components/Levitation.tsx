import { twins } from "@/assets/img";
import { Line } from "@/assets/img/levitation/Line";
import { Line2 } from "@/assets/img/levitation/Line2";
import Image from "next/image";

export const Levitation = () => {
  return (
    <section className="relative bg-[#26075b] 2xl:h-[800px] h-[600px]">
      <Line className="absolute top-0 z-10 scale-x-100" />
      <div className="bg-[#26075b] flex justify-center items-center flex-col relative">
        <div className="container-main flex justify-center items-center gap-16 2xl:h-[800px] h-[600px] relative">
          <div className="flex flex-col 2xl:text-left text-center 2xl:items-start items-center gap-8 text-white max-w-xl">
            <h3 className="font-bold text-3xl">
              Закажите голос малыша сейчас и получите скидку 15% на следующий
              заказ!
            </h3>
            <p className="text-sm leading-6 font-semibold">
              Для точной оценки нам нужно максимум информации. Пришлите
              подробное описание проекта и мы сделаем вам самое выгодное
              предложение.
            </p>
            <button className="text-lg bg-[#dd3333] rounded-full px-6 py-3 w-fit">
              Рассчитать стоимость
            </button>
          </div>

          <Image
            className="2xl:block hidden sticky top-20 -bottom-20 transition-all duration-700"
            src={twins}
            alt="близнецы"
            width={438}
            height={350}
          />
        </div>
      </div>
      <Line2 className="absolute bottom-0 z-10 rotate-180 -scale-x-100" />
    </section>
  );
};
