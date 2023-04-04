import { TbChevronDown } from "react-icons/tb";

function Accordion() {
  return (
    <div className="accordion">
      <button className="accordion-button">
        <p>Categorias</p>
        <TbChevronDown />
      </button>
      <ul className="menu-categories"></ul>
    </div>
  );
}

export default Accordion;
