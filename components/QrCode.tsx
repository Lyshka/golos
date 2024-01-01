import { qrCode } from "@/assets/img";
import Image from "next/image";

export const QrCode = () => {
  return (
    <section className="bg-[#e9e9e9] flex justify-center items-center">
      <div className="container-main py-6 flex 2xl:flex-row flex-col items-center gap-10">
        <div>
          <h3 className="text-xl font-bold">
            Как купить готовое аудио «Голос малыша» для гендер-пати. Инструкция
          </h3>

          <div className="text-sm pl-4 mt-4 max-w-[500px] leading-6">
            <p>
              1. Войдите в банковское приложение (поддерживается почти всеми
              банками РФ)
            </p>
            <p>2. Найдите иконку сканирования QR-кода</p>
            <p>
              3. Отсканируйте данное изображение с экрана компьютера (или
              сохраните в галерею смартфона и загрузите в приложение)
            </p>
            <p>4. Укажите сумму 2900 рублей</p>
            <p>
              5. Пришлите нам квитанцию об оплате и версию, которую вы выбрали
              для покупки. Например: версия 2, сынок. Или версия 3, дочка.
            </p>
            <p>6. После этого мы пришлем вам ссылку на скачивание.</p>
            <p>
              7. Важно! Платежи принимаются только в рабочее время. Ссылки
              выдаются покупателю только после подтверждения платежа со стороны
              нашего банка.
            </p>
          </div>
        </div>

        <Image src={qrCode} alt="qrCode" height={500} width={500} />
      </div>
    </section>
  );
};
