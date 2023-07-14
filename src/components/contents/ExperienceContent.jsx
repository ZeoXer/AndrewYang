import { useState } from "react";
import TimePoint from "../TimePoint";
import Title from "../Title";

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
        showMode={activeTimePoint === item.id ? "font-bold animate-bounce" : ""}
        onClick={() => handleClick(item.id)}
      />
    );
  });

  return (
    <div className="h-full border-4 border-cyan-950 relative p-3">
      <Title additionClass="absolute -left-6 -top-6 bg-white">個人經歷</Title>
      <div className="mt-24 flex justify-center">{renderedTimePoints}</div>
    </div>
  );
};

export default ExperienceContent;
