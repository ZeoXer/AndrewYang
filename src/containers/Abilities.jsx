import ContentBlock from "../components/ContentBlock";
import AbilitiesContent from "../components/contents/AbilitiesContent";
import Title from "../components/Title";
import {
  BiLogoPython,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoGoLang,
  BiLogoCPlusPlus,
} from "react-icons/bi";
import PythonImg from "../images/Python.png";
import HTMLCSSImg from "../images/HTMLCSS.png";
import JSImg from "../images/JSImg.png";
import ReactImg from "../images/ReactImg.png";
import GolangImg from "../images/GolangImg.png";
import CCplusplusImg from "../images/CCplusplusImg.png";

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
      icon: <BiLogoCss3 />,
      proficiency: 83,
      content:
        "在六角學院初次接觸到網頁前端相關的技術，並以此做為起點深入這個領域，在熟悉 HTML、CSS 後，延伸研究到 SASS、Bootstrap5、TailwindCSS 等套件工具幫助開發，也奠定日後學習大型框架的基礎。目前在六角學院擔任線上助教，一方面協助同學排除觀念上的問題，一方面也以此持續學習，向下扎根打好基礎。另外也曾在實習公司接觸過網頁元件調整相關的工作。",
      img: HTMLCSSImg,
    },
    {
      name: "JavaScript",
      icon: <BiLogoJavascript />,
      proficiency: 81,
      content:
        "為了進一步提升網頁互動式的使用者體驗，而開始鑽研 JavaScript 以實作更進階豐富的網頁，也接觸到 jQuery 框架完成簡單的網頁互動效果；以及 api 的串接，得以和外部的資料作連動來豐富網頁的功能，並學習搭配 TypeScript 使得程式碼更為嚴謹和易於維護，也幫助自己在後續學習 React 框架時能更好的上手。另一方面在實習公司工作時也得力於 JavaScript 的基礎，在使用 Google App Script 整合 Google sheet 資料時能較快速的掌握。",
      img: JSImg,
    },
    {
      name: "React",
      icon: <BiLogoReact />,
      proficiency: 86,
      content:
        "對於前端相關的技術有較成熟的理解後，發現到使用框架來構築網站是目前在開發上相當熱門的方式，於是 React 便成為我第一個接觸到的前端框架，從網路上尋找課程自行學習，並嘗試練習應用在實務方面，例如此網站即是利用 React 建構而成的靜態網頁。後續也有延伸接觸到 Nextjs 框架，並透過與 UI 設計師的合作，打造出一個完整的前端網頁，也使我對於前端框架的理解有更進一步的認識。",
      img: ReactImg,
    },
    {
      name: "Golang",
      icon: <BiLogoGoLang />,
      proficiency: 72,
      content:
        "在實習公司工作時因為開發的需求而自行學習，在網路上尋求相關資源以快速掌握該語言的核心知識，配合公司的需求進一步鑽研網路伺服器、資料庫相關的套件支援 (gin、gorm)，目前運用在架設公司專案中後端伺服器以及 api 的設計。",
      img: GolangImg,
    },
    {
      name: "C/C++",
      icon: <BiLogoCPlusPlus />,
      proficiency: 60,
      content:
        "在學校時接觸到 C 和 C++ 相關的課程，對於基礎的概念具備一定程度的理解，也在後續修習資料結構與演算法課程時實際運用於作業練習上。",
      img: CCplusplusImg,
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
