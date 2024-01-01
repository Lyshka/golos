import { reviews } from "@/constants/reviews";
import Image from "next/image";

export const Reviews = () => {
  return (
    <section className="py-10 flex justify-center items-center bg-white">
      <div className="container-main flex flex-col gap-10">
        <p className="text-2xl font-semibold text-center">Отзывы клиентов</p>

        <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
          {reviews.map(({ id, img }) => (
            <Image
              className="object-cover"
              src={img}
              alt="review"
              key={id}
              width={550}
              height={180}
            />
          ))}
        </div>

        <p className="text-sm text-center">
          Больше мнений клиентов о работе нашей студии можете найти в
          ЯНДЕКС-отзывах
        </p>
      </div>
    </section>
  );
};
