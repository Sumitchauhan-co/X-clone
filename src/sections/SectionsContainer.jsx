import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const SectionsContainer = () => {
  return (
    <div className="bg-black h-screen w-screen grid xl:grid-cols-[0.8fr_1.2fr_1fr] lg:grid-cols-[0.5fr_1.7fr_1fr] sm:grid-cols-[0.5fr_1.5fr]">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default SectionsContainer;
