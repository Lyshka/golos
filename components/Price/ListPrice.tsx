import { price } from "@/constants/price";
import { CardPrice } from "./CardPrice";

export const ListPrice = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="grid 2xl:grid-cols-3 grid-cols-1 2xl:gap-10 gap-4">
        {price.map((card) => (
          <CardPrice key={card.id} card={card} />
        ))}
      </div>

      <button className="bg-[#dd3333] rounded-full px-8 py-4 text-white">Заказать</button>
    </div>
  );
};
