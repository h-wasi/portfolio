import React from "react";
import { SkillsMarque } from "./Marque";

function SkillComponent() {
  return (
    <div //
      className="xl:deep-gridd deep-gridm bg-gray-600 bg-grid grid-skills gap-4 h-[100vh] max-xl:h-[205vh] py-4 px-6 transition-all duration-1000"
      id="skills"
    >
      <SkillsMarque />
      <div className="border frontend border-pink-700  rounded-xl">
        Frontend
      </div>
      <div className="backend border border-pink-700 rounded-xl">Backend</div>
      <div className="cloud border border-pink-700 rounded-xl">Cloud</div>
      <div className="web-scraping border border-pink-700 rounded-xl">
        Web Scraping
      </div>
      <div className="Miscellaneous border border-pink-700 rounded-xl">
        Miscellaneous
      </div>
    </div>
  );
}

export default SkillComponent;
