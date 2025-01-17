import { useState } from "react";
import "./ProductInfo.css";
import AnimateHeight from "react-animate-height";
import { product } from "../Product/Product";

type ProductInfoProps = {
  product: product;
};

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const [isClicked, setisClicked] = useState(false);
  const [rotated, setRotated] = useState(false);

  const onClicked = () => {
    setRotated(!rotated);
    console.log(isClicked);
    if (isClicked == false) {
      setisClicked(true);
    } else {
      setisClicked(false);
    }
  };
  return (
    <div className="sidebar__info_element">
      <div className="sidebar__info_element_title">
        <h3>{product.type}</h3>
        <img
          onClick={onClicked}
          style={{
            transition: "transform 0.5s ease-in-out",
            transform: rotated ? "rotate(-180deg)" : "rotate(0deg)",
          }}
          className="arrow"
          src="src\assets\arrow.svg"
          alt=""
        />
      </div>
      <AnimateHeight height={isClicked ? "auto" : 0}>
        <div className="sidebar__info_element_box">
          <section className="sidebar__info_element_name">
            <div className="sidebar__info_element_tile">
              <p>{product.title}</p>
              <p>{product.percent}%</p>
            </div>
            <p>{product.amount}</p>
          </section>
        </div>
      </AnimateHeight>
    </div>
  );
};
