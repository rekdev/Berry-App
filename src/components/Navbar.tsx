import { TbMenu2 } from "react-icons/tb";
import Brand from "./assets/Brand";
import toggleMenu from "../helpers/toggle-menu";

function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <button className="button-menu" onClick={toggleMenu}>
            <TbMenu2 className="text-icon" />
          </button>
          <Brand
            className="navbar-brand"
            classNameIso="navbar-brand__iso"
            classNameLogo="navbar-brand__logo"
          />
        </div>
      </header>
    </>
  );
}

export default Navbar;
