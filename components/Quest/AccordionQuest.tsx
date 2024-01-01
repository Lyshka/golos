"use client";

import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";
import clsx from "clsx";

interface IAccordionQuest {
  title: string;
  text: string;
}

export const AccordionQuest = ({ text, title }: IAccordionQuest) => {
  const [open, setOpen] = useState(false);

  const toggleAccardion = () => {
    setOpen((prv) => !prv);
  };

  return (
    <div className="border-b">
      <div
        onClick={toggleAccardion}
        className={clsx(
          "flex items-center gap-2 font-bold text-lg cursor-pointer",
          open ? "pt-3" : "py-3"
        )}
      >
        <FaCaretRight
          className={clsx(
            "transition-all duration-300",
            open ? "rotate-90" : "rotate-0"
          )}
        />{" "}
        <span className={clsx(open ? "text-[#dd3333]" : "text-black")}>
          {title}
        </span>
      </div>

      {open && (
        <div
          className="py-4 text-sm text-[#848484]"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </div>
  );
};
