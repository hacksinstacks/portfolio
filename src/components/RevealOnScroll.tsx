import { useEffect, useRef } from "react";

import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
}

export const RevealOnScroll = ({ children }: RevealOnScrollProps) => {
    
// You should specify the type of the ref to be an HTMLDivElement so that TypeScript knows it has a classList property.
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        //ref.current can be null, so we check if it exists before accessing classList
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};