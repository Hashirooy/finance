import "./MonthMenu.css";

import Slider from "react-slick";

export const MonthMenu = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Slider>
      {months.map((month) => (
        <div key={month.id}>
          <a href="" key={month.id}>
            {month.name}
          </a>
        </div>
      ))}
    </Slider>
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
