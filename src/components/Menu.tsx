import { TbSettings, TbHome } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Accordion from "./Accordion";
import toggleMenu from "../helpers/toggle-menu";

function Menu() {
  return (
    <>
      <div
        className="menu-container"
        onClick={toggleMenu}
        id="menu-container"
      />
      <nav className="menu" id="menu">
        <div className="menu-main">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "active"
                : isActive
                ? "menu-link-item_active"
                : "menu-link-item"
            }
            onClick={toggleMenu}
          >
            <TbHome className="menu-icons text-icon" />
            <p>Inicio</p>
          </NavLink>
          <Accordion />
        </div>
        <div className="menu-controls">
          <NavLink
            to="settings/"
            className={({ isActive, isPending }) =>
              isPending
                ? "active"
                : isActive
                ? "menu-link-item_active"
                : "menu-link-item"
            }
            onClick={toggleMenu}
          >
            <TbSettings className="menu-icons text-icon" />
            <p>Ajustes</p>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Menu;
