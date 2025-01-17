import { Main } from "../Main/Main";
import { SideBar } from "../SideBar/SideBar";
import "./Layout.css";

export const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__sidebar">
        <SideBar />
      </div>
      <div className="layout__main">
        <Main />
      </div>
    </div>
  );
};
