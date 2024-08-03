import React, { useEffect, useRef } from "react";
import "./mooveUpArrow.scss";
import mooveUpArrowIcon from "../../assets/images/mooveUpArrow.png";

export default function MooveUpArrow() {
  const scrollBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollBtnRef.current) {
        if (window.scrollY > 700) {
          scrollBtnRef.current.classList.remove("is-show-btn_hide");
        } else {
          scrollBtnRef.current.classList.add("is-show-btn_hide");
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
      className="is-show-btn is-show-btn_hide"
      ref={scrollBtnRef}
      onClick={handleClick}
    >
      <img src={mooveUpArrowIcon} alt="moove up arrow icon" />
    </div>
  );
}
