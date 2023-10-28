import {NavLink} from "react-router-dom";
import "./MainMenu.scss";

const MainMenu = () => {
  return (
    <ul className={"mainMenu"}>
      <li><NavLink to={"/"}>Головна сторінка</NavLink></li>
      <li><NavLink to={"/operative-information"}>Оперативна інформація</NavLink></li>
      <li>Щотижнева інформація</li>
    </ul>
  );
};

export default MainMenu;