import { domGenerator } from "./domGenerator";

const generateAbout = () => {
  
  domGenerator.generateStory();
  domGenerator.generateBeliefs();
  domGenerator.generateVisitContact();
};

export { generateAbout };