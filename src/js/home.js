import { domGenerator } from "./domGenerator";

const generateHome = () => {
  domGenerator.generateHero();
  domGenerator.generateBanner();
};

export { generateHome };