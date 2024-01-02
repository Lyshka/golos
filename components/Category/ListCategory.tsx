import { category } from "@/constants/category";
import { CardCategory } from "./CardCategory";

export const ListCategory = () => {
  const isFirstOrSecond = (id: number): string => {
    return id === 0 || id === 1 ? "2xl:col-span-6 col-span-1" : "2xl:col-span-4 col-span-1";
  };

  return (
    <div className="grid 2xl:grid-cols-12 grid-cols-1 gap-6 w-full">
      {category.map((card, idx) => (
        <CardCategory clas={isFirstOrSecond(idx)} key={card.id} card={card} />
      ))}
    </div>
  );
};
