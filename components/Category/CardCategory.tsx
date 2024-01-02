import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

interface ICardCategory {
  card: {
    title: string;
    description: string;
    buttonText: string;
    img: StaticImageData;
  };
  clas: string;
}

export const CardCategory = ({ card, clas }: ICardCategory) => {
  const { buttonText, description, img, title } = card;

  return (
    <div className={clsx("relative", clas)}>
      <Image
        className="w-full h-full object-cover"
        src={img}
        alt="категория"
        width={540}
        height={270}
      />

      <div className="absolute top-0 left-0 2xl:p-8 p-4">
        <div className="flex flex-col gap-6 2xl:w-72 w-52">
          <h6
            className="text-xl font-bold"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-sm font-medium">{description}</p>
        </div>

        <button className="bg-[#dd3333] 2xl:px-4 px-2 2xl:py-2 py-1 rounded-full text-xs text-white text-nowrap w-fit mt-4">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
