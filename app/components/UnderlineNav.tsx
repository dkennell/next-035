"use client";

import { useLayoutEffect, useRef, useState } from "react";

export default function UnderlineNav() {
  const labels = ["Home", "Portfolio", "About", "Contact"];
  const [selected, setSelected] = useState(0);
  const [left, setLeft] = useState(0);
  const itemRefs = useRef([]);

  useLayoutEffect(() => {
    const currentElement = itemRefs.current[selected];
    console.log(currentElement);
    const padding = 20;
		const elementWidth = currentElement.offsetWidth + padding*2
		const sliderWidth = 100
    const basePosition = currentElement.offsetLeft - padding;
		console.log(basePosition)
    console.log(currentElement.offsetWidth);
		const finalPosition = basePosition + (.5*elementWidth) - (.5*sliderWidth)
		setLeft(finalPosition)
  }, [selected]);

  return (
    <>
      <div className="relative">
        <ul className="flex">
          {labels.map((label, i) => (
            <li
              key={label}
              onClick={() => setSelected(i)}
              className={`text-2xl px-5`}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
            >
              {label}
            </li>
          ))}
        </ul>
        <span
					className="absolute bg-black h-[2px] w-25 transition-transform"
					style={{transform: `translateX(${left}px)`}}/>
      </div>
    </>
  );
}
