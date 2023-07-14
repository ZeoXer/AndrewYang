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
        "Python 是我在學校第一個接觸的程式語言，也開啟了我對程式設計的興趣，除了在校扎實的課程學習訓練，曾於課堂作業裡製作過小遊戲 (tkinter、turtle)，也接觸過資料分析 (pandas、matplotlib)、機器學習 (scikit-learn) 相關的內容。另外也利用課外的時間持續精進，包含在實習工作期間實際運用的經驗，主要的範圍在爬蟲方面，利用基礎的 requests、bs4 來進行網頁解析，亦使用到 selenium 完成進階的資料爬取。",
      img: PythonImg,
    },
    {
      name: "HTML/CSS",
      icon: <BiLogoHtml5 />,
      proficiency: 81,
      content:
        "在六角學院初次接觸到網頁前端相關的技術，並以此做為起點深入這個領域，在熟悉 HTML、CSS 後，延伸研究到 SASS、Bootstrap5、TailwindCSS 等套件工具幫助開發，也奠定日後學習大型框架的基礎。目前在六角學院擔任線上助教，一方面協助同學排除觀念上的問題，一方面也以此持續學習，向下扎根打好基礎。另外也曾在實習公司接觸過網頁元件調整相關的工作。",
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
      proficiency: 77,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam tenetur officiis voluptatum ratione mollitia repellat, tempore, laboriosam adipisci aperiam fugit vel quos, id quod vero optio repellendus aliquam debitis nemo!",
    },
    {
      name: "Golang",
      icon: <BiLogoGoLang />,
      proficiency: 72,
      content:
        "在實習公司工作時因為開發的需求而自行學習，在網路上尋求相關資源以快速掌握該語言的核心知識，配合公司的需求進一步鑽研網路伺服器架設、資料庫相關的套件支援 (gin、gorm)，目前運用在架設公司專案中後端伺服器以及 api 的設計。",
    },
    {
      name: "C/C++",
      icon: <BiLogoCPlusPlus />,
      proficiency: 60,
      content:
        "在學校時接觸到 C 和 C++ 相關的課程，對於基礎的概念具備一定程度的理解，也在後續修習資料結構與演算法課程時實際運用於作業練習上。",
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
