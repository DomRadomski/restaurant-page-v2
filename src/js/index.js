import '../styles.css';

import { domGenerator } from "./domGenerator";
import { generateHome } from "./home";
import { generateAbout } from "./about";
import { generateMenu } from "./menu";

const routes = {
  home: generateHome,
  menu: generateMenu,
  about: generateAbout,
};

const clearContent = () => {
  const content = document.querySelector(".content");
  if (!content) throw new Error('Missing ".content" container');
  content.innerHTML = "";
};

const loadPage = (route) => {
  const render = routes[route];
  if (!render) throw new Error(`Unknown route: ${route}`);

  clearContent();
  render();
};

document.addEventListener("DOMContentLoaded", () => {
  domGenerator.generateNav();      // nav created once
  loadPage("home");   // initial route

  document.getElementById("home-btn")?.addEventListener("click", () => loadPage("home"));
  document.getElementById("menu-btn")?.addEventListener("click", () => loadPage("menu"));
  document.getElementById("about-btn")?.addEventListener("click", () => loadPage("about"));
});
