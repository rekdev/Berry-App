import { TbMenu2 } from "react-icons/tb";
import Brand from "./assets/Brand";

function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <button className="button-menu">
            <TbMenu2 />
          </button>
          <Brand className="navbar-brand" />
        </div>
      </header>
    </>
  );
}

export default Navbar;
