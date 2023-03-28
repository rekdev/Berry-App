import { TbSettings, TbHome } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <div className="menu-main">
        <NavLink to="/" className="menu-link-item">
          <TbHome className="menu-icons" />
          <p>Inicio</p>
        </NavLink>
        <button>Categorias</button>
        <ul className="menu-categories"></ul>
      </div>
      <div className="menu-controls">
        <NavLink to="settings/" className="menu-link-item">
          <TbSettings className="menu-icons" />
          <p>Ajustes</p>
        </NavLink>
      </div>
    </nav>
  );
}

export default Menu;
