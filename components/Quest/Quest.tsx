import { ListQuest } from "./ListQuest";

export const Quest = () => {
  return (
    <section className="flex justify-center items-center bg-white py-10">
      <div className="container-main flex flex-col gap-10">
        <h3 className="text-3xl font-semibold text-center">
          Записать голос малыша в профессиональной студии
        </h3>

        <p className="text-sm">
          Для того чтобы оформить заказ на голос маленького ребенка вам нужно
          просто отправить нам заявку с этой страницы. Напишите текст, укажите
          пол малыша и мы постараемся в самые кратчайшие сроки найти нужный вам
          вариант. Вы должны понимать, что работа с детишками это не только
          работа студийных специалистов, это еще и работа с родителями. Нужно
          согласовать время записи, варианты оплаты и другие вопросы. И еще
          крайне важный момент — ребенка нельзя заставить. Он будет сотрудничать
          только в том случае, если найти нужный стимул. Новая игрушка, мультик,
          вкусняшки… всё индивидуально. Нужно уметь найти правильные слова.
          Именно из-за этих важных моментов записать голос малыша всегда будет
          немножко дороже, чем работа со взрослыми дикторами и актерами.
          <br />
          <br />
          <span className="font-bold text-[#373737]">
            Внимание. Малыши записывают текст строго до 40 секунд.{" "}
          </span>
        </p>

        <ListQuest />
      </div>
    </section>
  );
};
