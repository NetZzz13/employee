import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/employees">Сотрудники</NavLink>
    </div>
  );
};

export default Menu;
