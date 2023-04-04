import { TbChevronDown } from "react-icons/tb";

function Accordion() {
  return (
    <div className="accordion">
      <button className="accordion-button">
        <p className="text">Categorias</p>
        <TbChevronDown className="text-icon" />
      </button>
      <ul className="menu-categories"></ul>
    </div>
  );
}

export default Accordion;
