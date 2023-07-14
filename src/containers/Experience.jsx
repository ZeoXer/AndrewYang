import ContentBlock from "../components/ContentBlock";
import ExperienceContent from "../components//contents/ExperienceContent";

const Experience = ({ id, bgName }) => {
  const experienceList = [
    {
      id: 1,
      icon: "bg-ntu",
      time: "2018.9 - 2023.1",
      title: "",
      description: "",
    },
    {
      id: 2,
      icon: "bg-shanfu",
      time: "2019.9 - 2022.7",
      title: "",
      description: "",
    },
    {
      id: 3,
      icon: "bg-hex",
      time: "2022.7 - Now",
      title: "",
      description: "",
    },
    {
      id: 4,
      icon: "bg-mrhost",
      time: "2022.11 - Now",
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
