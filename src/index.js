import './styles.css';

function init() {
  console.log('Webpack is working');
  alert('Webpack is working');
}

const domGenerator = (() => {

  const nav = document.querySelector("nav");
  const content = document.querySelector(".content");

  const generateElement = (element, elementClass, elementContent) => {

    const newElement = document.createElement(element);

    if(elementClass){newElement.classList.add(elementClass)};
    if(elementContent){newElement.textContent = elementContent};

    return newElement;
  }

  const generateNav = () => {
    const left = generateElement("div", "left");
    const right = generateElement("div", "right");

    left.appendChild(generateElement("h1",null,"BARFIN OF BAY WEST"));

    const rightContent = ["HOME", "MENU", "ABOUT"];

    rightContent.forEach(content => {
      right.appendChild(generateElement("button", null, content));
    });

    nav.appendChild(left); nav.appendChild(right);
  }

  return { generateNav }

})();



document.addEventListener("DOMContentLoaded", () => {
  domGenerator.generateNav();
});
