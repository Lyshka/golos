import { ListPrice } from "./ListPrice";
import { ListVolumes } from "./ListVolumes";

export const Price = () => {
  return (
    <section className="flex justify-center items-center bg-white py-10">
      <div className="container-main flex flex-col gap-10">
        <ListPrice />

        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-semibold">
            Купить готовую озвучку для гендер-пати
          </h4>
          <p className="font-light">
            Следующие примеры голоса ребенка для гендерной вечеринки вы можете
            приобрести за 2900 рублей. После оплаты вы получите файл в чистовом
            варианте, без звуковых маркеров. Есть с музыкой, есть без музыки.
            Просто выбирайте понравившийся вариант и скажите нам пол ребенка,
            когда пришлете квитанцию об оплате.{" "}
          </p>
          <p className="font-semibold text-[#7a7a7a]">
            ! Все версии записаны для обоих полов. И для девочек, и для
            мальчиков. 2900 рублей стоит ОДНА версия.
          </p>
        </div>

        <ListVolumes />
      </div>
    </section>
  );
};
