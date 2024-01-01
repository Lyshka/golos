import Image, { StaticImageData } from "next/image";
import { Volume } from "../Volume";
import clsx from "clsx";

interface ICardGender {
  card: {
    id: number;
    title: string;
    img: StaticImageData;
    volume: string;
  };
}

export const CardGender = ({ card }: ICardGender) => {
  const { img, title, volume, id } = card;

  return (
    <div className="flex flex-col items-center gap-4">
      <span className={clsx("text-lg", id === 2 && "text-rose-400")}>{title}</span>

      <Image src={img} alt="гендер" width={306} height={206} />

      <Volume volume={volume} />
    </div>
  );
};
