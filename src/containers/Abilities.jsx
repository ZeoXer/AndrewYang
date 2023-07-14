import ContentBlock from "../components/ContentBlock";
import AbilitiesContent from "../components/contents/AbilitiesContent";
import Title from "../components/Title";
import {
  BiLogoPython,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoGoLang,
  BiLogoCPlusPlus,
} from "react-icons/bi";
import PythonImg from "../images/Python.png";
import HTMLCSSImg from "../images/HTMLCSS.png";

const Abilities = ({ id, bgName }) => {
  const abilitiesList = [
    {
      name: "Python",
      icon: <BiLogoPython />,
      proficiency: 85,
      content:
        "在學校第一個接觸的程式語言，也開啟了我對程式設計的興趣，除了在校扎實的課程學習訓練外，也利用課外的時間持續精進，包含在實習工作期間實際的運用，主要的範圍在爬蟲方面，利用基礎的 requests、bs4 來進行網頁解析，亦會使用 selenium 完成進階的資料爬取。另外曾搭配 tkinter、turtle 等套件製作小遊戲，也接觸過資料分析、機器學習相關的內容。",
      img: PythonImg,
    },
    {
      name: "HTML/CSS",
      icon: <BiLogoHtml5 />,
      proficiency: 83,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam tenetur officiis voluptatum ratione mollitia repellat, tempore, laboriosam adipisci aperiam fugit vel quos, id quod vero optio repellendus aliquam debitis nemo!",
      img: HTMLCSSImg,
    },
    {
      name: "JavaScript",
      icon: <BiLogoJavascript />,
      proficiency: 83,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam tenetur officiis voluptatum ratione mollitia repellat, tempore, laboriosam adipisci aperiam fugit vel quos, id quod vero optio repellendus aliquam debitis nemo!",
    },
    {
      name: "React",
      icon: <BiLogoReact />,
      proficiency: 80,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam tenetur officiis voluptatum ratione mollitia repellat, tempore, laboriosam adipisci aperiam fugit vel quos, id quod vero optio repellendus aliquam debitis nemo!",
    },
    {
      name: "Golang",
      icon: <BiLogoGoLang />,
      proficiency: 65,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam tenetur officiis voluptatum ratione mollitia repellat, tempore, laboriosam adipisci aperiam fugit vel quos, id quod vero optio repellendus aliquam debitis nemo!",
    },
    {
      name: "C/C++",
      icon: <BiLogoCPlusPlus />,
      proficiency: 58,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam tenetur officiis voluptatum ratione mollitia repellat, tempore, laboriosam adipisci aperiam fugit vel quos, id quod vero optio repellendus aliquam debitis nemo!",
    },
  ];

  return (
    <ContentBlock id={id} bg={bgName}>
      <Title>專業能力</Title>
      <AbilitiesContent abilitiesList={abilitiesList} />
    </ContentBlock>
  );
};

export default Abilities;
