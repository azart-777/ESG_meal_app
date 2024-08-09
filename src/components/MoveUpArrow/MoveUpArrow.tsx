import React, { useEffect, useRef } from "react";
import "./MoveUpArrow.scss";
import { move_up_arrow } from "../../assets/images";

export const MoveUpArrow:  React.FC = () => {
  const scrollBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollBtnRef.current) {
        if (window.scrollY > 700) {
          scrollBtnRef.current.classList.remove("move-up-arrow--hidden");
        } else {
          scrollBtnRef.current.classList.add("move-up-arrow--hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      id="move-up-arrow"
      className="move-up-arrow move-up-arrow--hidden"
      ref={scrollBtnRef}
      onClick={handleClick}
    >
      <img src={move_up_arrow} alt="move up arrow icon" />
    </div>
  );
}
