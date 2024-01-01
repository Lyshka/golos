type Services = {
  id: number;
  title: string;
};

interface ICardPrice {
  card: {
    title: string;
    description: string;
    price: string;
    hit?: boolean;
    services: Services[];
  };
}

export const CardPrice = ({ card }: ICardPrice) => {
  const { description, price, services, title, hit } = card;

  return (
    <div className="flex flex-col items-center gap-10 relative overflow-hidden bg-[#f7f7f7] py-8 px-4">
      {hit && (
        <div className="bg-[#dd3333] shadow-xl text-white uppercase absolute py-1 px-6 rotate-[-45deg] top-4 left-6 font-bold text-center w-full -translate-x-1/2">
          ХИТ
        </div>
      )}
      <div className="flex items-center flex-col gap-2">
        <h5 className="text-3xl font-bold">{title}</h5>
        <p className="leading-loose text-center">{description}</p>
      </div>

      <span className="text-6xl font-bold">от {price} ₽</span>

      <ul className="text-gray-400 flex flex-col items-center gap-2">
        {services.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};
