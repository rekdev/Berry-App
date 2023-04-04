const toggleMenu = () => {
  let menuContainer = document.getElementById("menu-container");
  let menu = document.getElementById("menu");
  menuContainer?.classList.toggle("show-menu-container");
  menu?.classList.toggle("show-menu");
};

export default toggleMenu;
