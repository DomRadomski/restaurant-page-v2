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

  const generateCards = (items = []) => {
  const grid = generateElement("div", "grid");

  items.forEach(({ title, description, meta }) => {
    const titleEl = generateElement("h3", "card-title", title);
    const descEl = generateElement("p", "card-desc", description);

    const children = [titleEl, descEl];

    // optional meta (price, etc.)
    if (meta) {
      const metaEl = generateElement(
        "div",
        "card-meta",
        [generateElement("span", "card-price", meta)]
      );
      children.push(metaEl);
    }

    const card = generateElement("div", "card", "", children);
    grid.appendChild(card);
  });

  return grid;
};


  const generateNav = () => {

    if (!nav) throw new Error("No <nav> found in the DOM.");

    const left = generateElement("div", "left");
    const right = generateElement("div", "right");

    left.appendChild(generateElement("h1", null, "BARFIN OF BAY WEST"));

    ["HOME", "MENU", "ABOUT"].forEach(label => {
      const navButton = generateElement("button", null, label)
      navButton.id = `${label.toLowerCase()}-btn`;
      right.appendChild(navButton);
    });

    nav.appendChild(left);
    nav.appendChild(right);
  };

  // Home Stuff --------------------------------------------------------------------

  const generateHero = () => {
    const pageContent = document.querySelector(".content");
    if (!pageContent) throw new Error('No element with class ".content" found in the DOM.');

    const heroItems = [
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

    const heroGrid = generateCards(heroItems);

    const hero = generateElement("div", "hero", "", [heroGrid]);
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

  // Menu Stuff ----------------------------------------------------------------

  const createMenuBlock = (headingText, items) => {
    return generateElement("div", "block", "", [
      generateElement("h2", "block-title", headingText),
      generateCards(items)]);
  };

  /* ---------- Category functions ---------- */

  const generateStarters = () => {
    
    pageContent.appendChild(
      createMenuBlock("Starters", [
        { title: "Sea Salt Fries", description: "Hand-cut fries, rosemary salt, house aioli.", price: "£4.50" },
        { title: "Crispy Calamari", description: "Light batter, lemon, chili jam.", price: "£8.50" },
        { title: "West Bay Chowder Cup", description: "Creamy fish chowder, sourdough toast.", price: "£7.00" },
      ])
    );
  };

  const generateMains = () => {
    
    pageContent.appendChild(
      createMenuBlock("Mains", [
        { title: "Smoked Brisket Burger", description: "12-hour brisket, pickles, house sauce, brioche bun.", price: "£14.50" },
        { title: "Harbour Fish & Chips", description: "Beer-battered catch of the day, chips, mushy peas, tartare.", price: "£16.00" },
        { title: "Plant Power Bowl", description: "Roasted veg, quinoa, tahini dressing, toasted seeds.", price: "£12.50" },
      ])
    );
  };

  const generateGrill = () => {
    
    pageContent.appendChild(
      createMenuBlock("From the Grill", [
        { title: "Charred Chicken Stack", description: "Buttermilk chicken, slaw, spicy mayo, brioche bun.", price: "£13.50" },
        { title: "Garlic Butter Prawns", description: "Sizzled prawns, herbs, lemon, warm bread.", price: "£15.50" },
        { title: "Ribeye + Peppercorn", description: "10oz ribeye, peppercorn sauce, fries, salad.", price: "£24.00" },
      ])
    );
  };

  const generateDesserts = () => {
    
    pageContent.appendChild(
      createMenuBlock("Desserts", [
        { title: "Lemon Tart", description: "Sharp, sweet, buttery crust, whipped cream.", price: "£6.00" },
        { title: "Sticky Toffee Pudding", description: "Warm sponge, toffee sauce, vanilla ice cream.", price: "£7.00" },
        { title: "Sea Salt Brownie", description: "Dark chocolate brownie, salted caramel.", price: "£6.50" },
      ])
    );
  };

  const generateDrinks = () => {
    
    pageContent.appendChild(
      createMenuBlock("Drinks", [
        { title: "Coastal Lager", description: "Crisp, light, perfect by the water.", price: "£5.50" },
        { title: "House White / Red", description: "Ask about today’s pour.", price: "£6.50" },
        { title: "West Bay Spritz", description: "Citrus, fizz, a little sunshine.", price: "£8.50" },
      ])
    );
  };

  // About Stuff ----------------------------------------------------------------

  const createBlock = (title, children = []) => {
  return generateElement("div", "block", "", [
    generateElement("h2", "block-title", title),
    ...children,
  ]);
};

/* ---------- About generators ---------- */

  const generateStory = () => {

    const p1 = generateElement(
      "p",
      "block-text",
      "Barfin of Bay West started as a small kitchen with a big obsession: coastal comfort food. We work with local suppliers whenever possible — from seafood delivered fresh off the boats, to vegetables picked at peak season. We keep things simple, cook with care, and let the ingredients do the talking."
    );

    const p2 = generateElement(
      "p",
      "block-text",
      "Whether you’re here for a quick lunch, a sunset dinner, or a celebratory feast, you’ll find a relaxed atmosphere, a menu that changes with the tide, and a team that genuinely loves hosting."
    );

    pageContent.appendChild(createBlock("Our Story", [p1, p2]));
  };

  const generateBeliefs = () => {

    const beliefs = [
      { title: "Seasonal, Always", description: "Menus evolve weekly with specials that reflect what’s best right now." },
      { title: "Local First", description: "We prioritize nearby suppliers and sustainable sourcing." },
      { title: "Relaxed Service", description: "Friendly, unpretentious hospitality — every table, every time." },
    ];

    pageContent.appendChild(createBlock("What We Believe", [generateCards(beliefs)]));
  };

  const generateVisitContact = () => {

    const contactCards = [
      { title: "Address", description: "12 Bay West Parade, BW1 2AB" },
      { title: "Phone", description: "01234 567 890" },
      { title: "Email", description: "hello@barfinbaywest.com" },
    ];

    const hoursHeading = generateElement("h3", "subheading", "Opening Hours");

    const hours = generateElement("ul", "hours", "", [
      generateElement("li", null, "", [
        generateElement("span", null, "Mon–Thu"),
        generateElement("span", null, "12:00–22:00"),
      ]),
      generateElement("li", null, "", [
        generateElement("span", null, "Fri–Sat"),
        generateElement("span", null, "12:00–23:00"),
      ]),
      generateElement("li", null, "", [
        generateElement("span", null, "Sun"),
        generateElement("span", null, "12:00–20:00"),
      ]),
    ]);

    pageContent.appendChild(
      createBlock("Visit & Contact", [
        generateCards(contactCards),
        hoursHeading,
        hours,
      ])
    );
  };

  return { generateNav, generateHero, generateBanner, generateStarters, generateMains, generateGrill, generateDesserts, generateDrinks, generateStory, generateBeliefs, generateVisitContact };
})();



export { domGenerator };

