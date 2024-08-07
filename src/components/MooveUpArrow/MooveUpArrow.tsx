import React, { useEffect, useRef } from "react";
import "./mooveUpArrow.scss";
import mooveUpArrowIcon from "../../assets/images/mooveUpArrow.png";

export const MooveUpArrow:  React.FC = () => {
  const scrollBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollBtnRef.current) {
        if (window.scrollY > 700) {
          scrollBtnRef.current.classList.remove("moove-up-arrow--hidden");
        } else {
          scrollBtnRef.current.classList.add("moove-up-arrow--hidden");
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
      id="moove-up-arrow"
      className="moove-up-arrow moove-up-arrow--hidden"
      ref={scrollBtnRef}
      onClick={handleClick}
    >
      <img src={mooveUpArrowIcon} alt="moove up arrow icon" />
    </div>
  );
}
