import React from "react";
import BiographyCard from "./BiographyCard";
import SkillsHighlight from "./SkillsHighlight";


export default function BioSection() {
  return (
    <div className="space-y-8 max-w-3xl">
      <BiographyCard />
      <SkillsHighlight />
      
    </div>
  );
}
