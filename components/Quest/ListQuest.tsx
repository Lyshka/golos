import { quest } from "@/constants/quest";
import { AccordionQuest } from "./AccordionQuest";

export const ListQuest = () => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-xl font-semibold text-center">
        Отвечаем на самые частые вопросы
      </p>

      <div className="flex flex-col">
        {quest.map(({ id, text, title }) => (
          <AccordionQuest key={id} text={text} title={title} />
        ))}
      </div>
    </div>
  );
};
