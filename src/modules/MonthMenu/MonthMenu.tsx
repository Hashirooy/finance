import { useState } from "react";
import "./MonthMenu.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import { useStoreActions, useStoreState } from "../../store";
import { date } from "../Store/Calendar";

export const MonthMenu = () => {
  const [isIndex, setIsIndex] = useState<number | null>(null);
  const setMonth = useStoreActions((state) => state.calendarStore.setMonth);
  const month = useStoreState((state) => state.calendarStore.month);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, month: date) => {
    e.preventDefault();
    setMonth(month);
    setIsIndex(month.id);
  };
  return (
    <div className="MonthMenu">
      <div className="swiper-container">
        <Swiper
          loop={true}
          spaceBetween={50}
          slidesPerView={3}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {month.map((month) => (
            <SwiperSlide key={month.id}>
              <a
                href="#"
                key={month.id}
                onClick={(e) => onClick(e, month)}
                className={`element ${month.id === isIndex ? "active" : ""}`}
              >
                {month.name}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
