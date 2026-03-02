# Restaurant Page

### A dynamic single-page restaurant website built as part of The Odin Project.

This project focuses on modular JavaScript architecture, reusable UI components, and clean separation between structure, styling, and behaviour.

[Live Demo](https://domradomski.github.io/restaurant-page-v2/)

## 🚀 Project Overview

The Restaurant Page is a dynamic single-page application (SPA) that renders all content via JavaScript.

Rather than hardcoding HTML sections, the UI is generated through reusable component functions and routed through a client-side rendering engine.

Key Goals:

  - Avoid hardcoded HTML for page sections
  
  - Practice modular JavaScript with ES6 imports/exports
  
  - Implement a simple routing system
  
  - Enforce separation of concerns
  
  - Use Webpack for bundling and development workflow

## 🧠 Architecture

The application follows a modular rendering pattern:

    index.js (entry point)
    │
    ├── domGenerator.js  → Reusable DOM utilities
    ├── home.js          → Home page section
    ├── menu.js          → Menu page section
    ├── about.js         → About page section

index.js acts as the application engine. A simple route map determines which page generator to call. The .content container is cleared. The selected page module renders its UI dynamically.
Navigation is created once and reused. This keeps routing logic isolated from UI implementation.

## 🔧 Core Concepts

Reusable DOM Factory

### At the heart of the project is a reusable element factory:

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

This utility:

  - Creates elements dynamically
  
  - Accepts single or multiple class names
  
  - Supports optional text content
  
  - Accepts child nodes for composition
  
  - This eliminates repetitive document.createElement boilerplate and encourages component composition.

### Composable UI Components

Example: generateCards

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

This function dynamically builds structured card layouts from data.

### Lightweight Routing System

index.js implements a simple route map:

    const routes = {
      home: generateHome,
      menu: generateMenu,
      about: generateAbout,
    };
    
    const loadPage = (route) => {
      const render = routes[route];
      if (!render) throw new Error(`Unknown route: ${route}`);
    
      clearContent();
      render();
    };

Navigation buttons trigger loadPage(route), which:

  - Clears the content container
  
  - Calls the appropriate render function
  
  - Throws errors for unknown routes

## 📚 What This Project Taught Me

This project strengthened my understanding of modular JavaScript architecture and reinforced the importance of separation of concerns. By building a small routing system and abstracting DOM creation into reusable utilities, I learned how to structure front-end applications in a scalable way without relying on frameworks. It improved my confidence with ES6 modules, component composition, and thinking in terms of reusable UI patterns rather than static markup. Most importantly, it shifted my mindset from “writing pages” to “designing systems,” which is a far more maintainable and professional approach to front-end development.

