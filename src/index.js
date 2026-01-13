import './styles.css';

const domGenerator = (() => {

  const pageContent = document.querySelector(".content");
  const nav = document.querySelector("nav");

  const generateElement = (tag, className, text = "", children = []) => {
    const el = document.createElement(tag);

    if (className) {
      // allow string or array of classes
      if (Array.isArray(className)) el.classList.add(...className);
      else el.classList.add(className);
    }

    if (text) el.textContent = text;

    if (children && children.length) {
      children.forEach(child => el.appendChild(child));
    }

    return el;
  };

  const generateNav = () => {

    if (!nav) throw new Error("No <nav> found in the DOM.");

    const left = generateElement("div", "left");
    const right = generateElement("div", "right");

    left.appendChild(generateElement("h1", null, "BARFIN OF BAY WEST"));

    ["HOME", "MENU", "ABOUT"].forEach(label => {
      right.appendChild(generateElement("button", null, label));
    });

    nav.appendChild(left);
    nav.appendChild(right);
  };

  const generateHero = () => {
    const pageContent = document.querySelector(".content");
    if (!pageContent) throw new Error('No element with class ".content" found in the DOM.');

    const itemContainer = generateElement("div", "hero-menu");

    const menuItems = [
      {
        title: "Smoked Brisket Burger",
        description: "12-hour slow smoked brisket, pickles, house sauce."
      },
      {
        title: "Crispy Chicken Stack",
        description: "Buttermilk chicken, slaw, spicy mayo, brioche bun."
      },
      {
        title: "Plant Power Bowl",
        description: "Roasted veg, quinoa, tahini dressing, toasted seeds."
      }
    ];

    menuItems.forEach(itemData => {
      const heading = generateElement(
        "h3",
        "hero-menu-title",
        itemData.title
      );

      const desc = generateElement(
        "p",
        "hero-menu-desc",
        itemData.description
      );

      const card = generateElement(
        "div",
        "hero-menu-item",
        "",
        [heading, desc]
      );

      itemContainer.appendChild(card);
    });

    const hero = generateElement("div", "hero", "", [itemContainer]);
    pageContent.appendChild(hero);
  };

  const generateBanner = () => {
    
    if (!pageContent) throw new Error('No element with class ".content" found in the DOM.');

    const bannerData = {
      heading: "Relaxed Dining by the Shore, Crafted with Care",
      text: "Barfins of Bay West is an independently owned restaurant celebrating fresh seafood and locally sourced ingredients. With ever-changing seasonal menus, daily chef’s specials, and sweeping views across West Bay, we offer a dining experience where coastal charm meets thoughtful cooking and genuinely welcoming service."
    };

    const heading = generateElement("h2", null, bannerData.heading);
    const paragraph = generateElement("p", null, bannerData.text);

    const banner = generateElement(
      "div",
      "banner",
      "",
      [heading, paragraph]
    );

    pageContent.appendChild(banner);
  };

  return { generateNav, generateHero, generateBanner};
})();

document.addEventListener("DOMContentLoaded", () => {
  domGenerator.generateNav();
  domGenerator.generateHero();
  domGenerator.generateBanner();
});

