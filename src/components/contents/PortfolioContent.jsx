import { useState, useEffect } from "react";
import WorkBlock from "../WorkBlock";
import WorkModal from "../WorkModal";

const PortfolioContent = ({ workList }) => {
  const [workNumber, setWorkNumber] = useState(null);

  const handleWorkClose = (e) => {
    e.preventDefault();
    setWorkNumber(null);
  };

  const handleWorkOpen = (id) => {
    setWorkNumber(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const allHideElements = document.querySelectorAll(".hide");
    allHideElements.forEach((element) => observer.observe(element));
  }, []);

  const renderedWorkBlocks = workList.map((work) => {
    return (
      <WorkBlock
        onOpen={handleWorkOpen}
        key={work.id}
        id={work.id}
        bgName={work.bgName}
        title={work.title}
      />
    );
  });
  const activeWork = workList[workNumber - 1];

  return (
    <div>
      <div className="my-12 md:my-16 lg:my-32">
        <div className="flex justify-center flex-wrap">
          {renderedWorkBlocks}
        </div>
      </div>
      {workNumber && (
        <WorkModal onClose={(e) => handleWorkClose(e)} work={activeWork} />
      )}
    </div>
  );
};

export default PortfolioContent;
