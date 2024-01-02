interface ICardEdge {
  card: {
    title: string;
    img: JSX.Element;
    text: string;
  };
}

export const CardEdge = ({ card }: ICardEdge) => {
  const { img, text, title } = card;

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="p-4 border-2 border-[#642b91] rounded-full flex justify-center items-center">{img}</div>

      <div className="text-center">
        <p className="text-lg font-bold text-[#642b91]">{title}</p>

        <p className="text-sm mt-4">{text}</p>
      </div>
    </div>
  );
};
