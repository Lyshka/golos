import { edge } from "@/constants/edge";
import { CardEdge } from "./CardEdge";

export const ListEdge = () => {
  return (
    <div className="grid 2xl:grid-cols-3 grid-cols-1 2xl:gap-8 gap-4">
      {edge.map((card) => (
        <CardEdge key={card.id} card={card} />
      ))}
    </div>
  );
};
