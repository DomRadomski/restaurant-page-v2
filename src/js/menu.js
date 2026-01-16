import { domGenerator } from "./domGenerator";

const generateMenu = () => {
  
  domGenerator.generateStarters();
  domGenerator.generateMains();
  domGenerator.generateGrill();
  domGenerator.generateDesserts();
  domGenerator.generateDrinks();
  
};

export { generateMenu };