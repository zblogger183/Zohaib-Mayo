"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-sm sm:text-base font-semibold text-white">{item.question}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime text-[#0a0a0a] transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <Icon name="Plus" size={16} />
              </span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
