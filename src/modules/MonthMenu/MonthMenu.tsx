import { useState } from "react";
import "./MonthMenu.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import { useStoreActions } from "../../store";
import { date } from "../Store/Calendar";

export const MonthMenu = () => {
  const [isIndex, setIsIndex] = useState<number | null>(null);
  const setMonth = useStoreActions((state)=> state.calendarStore.setMonth)

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, month:date) => {
    e.preventDefault();
    setMonth(month)
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
          {months.map((month) => (
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

const months = [
  { id: 1, name: "Январь" },
  { id: 2, name: "Февраль" },
  { id: 3, name: "Март" },
  { id: 4, name: "Апрель" },
  { id: 5, name: "Май" },
  { id: 6, name: "Июнь" },
  { id: 7, name: "Июль" },
  { id: 8, name: "Август" },
  { id: 9, name: "Сентябрь" },
  { id: 10, name: "Октябрь" },
  { id: 11, name: "Ноябрь" },
  { id: 12, name: "Декабрь" },
];
