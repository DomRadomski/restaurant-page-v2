import '../styles.css';

import { domGenerator } from "./domGenerator";
import { generateHome } from "./home";
import { generateAbout } from "./about";
import { generateMenu } from "./menu";

domGenerator.generateNav();

const clearContent = () => {
  const content = document.querySelector(".content");
  content.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", () => {
  // initial load
  generateHome();

  // nav buttons (they must already exist in the DOM)
  document.getElementById("home-btn").addEventListener("click", () => {
    clearContent();
    generateHome();
  });

  document.getElementById("menu-btn").addEventListener("click", () => {
    clearContent();
    generateMenu();
  });

  document.getElementById("about-btn").addEventListener("click", () => {
    clearContent();
    generateAbout();
  });
});
