import {useState } from "react";
import TimePoint from "../TimePoint";
import Title from "../Title";
import TimeContent from "../TimeContent";

const ExperienceContent = ({ experienceList }) => {
  const [activeTimePoint, setActiveTimePoint] = useState(1);

  const handleClick = (id) => {
    if (activeTimePoint !== id) {
      setActiveTimePoint(id);
    }
  };

  const renderedTimePoints = experienceList.map((item) => {
    let order = item.id;
    if (item.id === experienceList.length) {
      order = -1;
    }

    return (
      <TimePoint
        key={item.id}
        order={order}
        item={item}
        pointShowMode={
          activeTimePoint === item.id ? "font-bold animate-bounce" : ""
        }
        timeShowMode={activeTimePoint === item.id ? "block" : ""}
        onClick={() => handleClick(item.id)}
      />
    );
  });

  const renderedTimeContents = experienceList.map((item) => {
    return (
      <TimeContent showMode={activeTimePoint === item.id ? "block" : ""}>
        {item.description}
      </TimeContent>
    );
  });

  return (
    <div className="h-full border-4 border-cyan-950 relative p-3">
      <Title additionClass="absolute -left-6 -top-6 bg-white">個人經歷</Title>
      <div className="mt-16 md:mt-24 flex justify-center">{renderedTimePoints}</div>
      {renderedTimeContents}
    </div>
  );
};

export default ExperienceContent;
