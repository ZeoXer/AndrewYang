import ContentBlock from "../components/ContentBlock";
import ExperienceContent from "../components//contents/ExperienceContent";

const Experience = ({ id, bgName }) => {
  const experienceList = [
    {
      icon: null,
      title: "",
      description: "",
    },
  ];

  return (
    <ContentBlock id={id} bg={bgName}>
      <ExperienceContent experienceList={experienceList} />
    </ContentBlock>
  );
};

export default Experience;
