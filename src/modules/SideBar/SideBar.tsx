import "./SideBar.css";

import { ProductInfo } from "../ProductInfo/ProductInfo";
import { product } from "../Product/Product";
import { BlackButton } from "../ButtonBlack/ButtonBlack";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar_logo">
          <img className="logo" src="src\assets\logo.png" alt="" />
        </div>
        <div className="sidebar__container_clientProduct">
          <h1>Мои продукты</h1>
          <div className="sidebar__amount">
            <h2>220 000 P</h2>
            <img src="src\assets\eye.svg" alt="" />
          </div>
          <p>Общий баланс</p>
        </div>
        <div className="sidebar__info">
          {products.map((product, index) => (
            <ProductInfo key={index} product={product} />
          ))}
        </div>
        <BlackButton>Новый продукт</BlackButton>
      </div>
    </div>
  );
};

const products: product[] = [
  { title: "Глебас банк", percent: 4, type: "Карта", amount: 1000 },
  { title: "Тула перекуп", percent: 4, type: "Вклад", amount: 1200 },
  { title: "Дубай ай ай", percent: 4, type: "Счет", amount: 3000 },
];
