import { menuFooter } from "@/constants/menu";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-[#212121] flex justify-center items-center py-10">
        <nav className="container-main grid 2xl:grid-cols-4 grid-cols-1 gap-4">
          {menuFooter.map(({ id, links, title }) => (
            <div key={id} className="flex flex-col gap-4">
              <h6 className="pb-4 border-b text-[#D7D7D7] 2xl:text-lg text-sm">{title}</h6>

              <ul className="flex flex-col 2xl:gap-[1px] gap-1 text-white 2xl:text-base text-xs">
                {links.map(({ id, title, url }) => (
                  <li key={id}>
                    <Link href={url}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h6 className="pb-4 border-b text-[#D7D7D7] 2xl:text-lg text-sm">
              © Audio-Production 2001-2023
            </h6>

            <ul className="flex flex-col 2xl:gap-[1px] gap-1 text-white 2xl:text-base text-xs">
              <li>
                Информация на данном сайте носит исключительно ознакомительный
                характер и не является публичной офертой, определяемой ч. 2 ст.
                437 Гражданского кодекса РФ. Для получения точной информации о
                стоимости услуг свяжитесь с нами.
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="bg-[#121212] flex justify-center items-center py-6">
        <div className="container-main">
          <p className="text-xs text-[#666666] 2xl:text-left text-center">
            Внимание! Все материалы на сайте защищены АВТОРСКИМИ ПРАВАМИ. Любое
            копирование, скачивание, использование на сторонних ресурсах строго
            запрещено!
          </p>
        </div>
      </div>
    </footer>
  );
};
