import { useState } from "react";
import TabLink from "../TabLink";
import TabContent from "../TabContent";
import ProficiencyTag from "../ProficiencyTag";

const AbilitiesContent = ({ abilitiesList }) => {
  const [activeTab, setActiveTab] = useState("Python");

  const handleTabClick = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const renderedTabLinks = abilitiesList.map((item) => {
    return (
      <TabLink
        key={item.name}
        showMode={
          activeTab === item.name ? "font-bold bg-white animate-fadeIn" : ""
        }
        handleClick={() => handleTabClick(item.name)}
        width={`w-1/${abilitiesList.length}`}
      >
        <div className="flex justify-around items-center text-cyan-950">
          <>
            <p className="text-3xl lg:text-2xl">{item.icon}</p>
            <p className="hidden lg:block">{item.name}</p>
          </>
          <ProficiencyTag item={item} showMode="hidden md:block" />
        </div>
      </TabLink>
    );
  });

  const renderedTabContents = abilitiesList.map((item) => {
    return (
      <TabContent
        key={item.name}
        showMode={activeTab === item.name ? "block" : ""}
      >
        <div className="md:flex justify-around items-center">
          <img
            className="w-1/4 mx-auto mb-4 md:mx-10 md:mb-0"
            src={item.img}
            alt={item.name}
          />
          <div className="w-3/4 text-base md:text-lg mx-auto md:mx-10">
            {item.content}
          </div>
        </div>
        <ProficiencyTag item={item} showMode="absolute top-2 right-2 md:hidden" />
      </TabContent>
    );
  });

  return (
    <div className="w-full h-full">
      <div className="flex justify-between">{renderedTabLinks}</div>
      {renderedTabContents}
    </div>
  );
};

export default AbilitiesContent;
