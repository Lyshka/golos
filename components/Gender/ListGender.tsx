import { gender } from "@/constants/gender";
import { CardGender } from "./CardGender";

export const ListGender = () => {
  return (
    <div>
      <p className="text-xl text-center">
        Голос малыша для гендерной вечеринки
      </p>

      <div className="flex 2xl:flex-row flex-col 2xl:gap-8 gap-4 2xl:mt-8 mt-4 justify-center">
        {gender.map((card) => (
          <CardGender key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
