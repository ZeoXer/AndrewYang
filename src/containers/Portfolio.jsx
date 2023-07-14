import ContentBlock from "../components/ContentBlock";
import Title from "../components/Title";
import TodoListImg from "../images/TodoListImg.png";
import ChatTalkerImg from "../images/ChatTalkerImg.png";
import PortfolioContent from "../components/contents/PortfolioContent";

const Portfolio = ({ id, bgName }) => {
  const workList = [
    {
      id: 1,
      title: "TodoListAPI",
      description:
        "一個 TodoList 小應用，前端使用 HTML 搭配 SCSS 建構，後端則運用 TypeScript 串接 API，實作註冊、登入帳號以及新增、修改、刪除、篩選待辦事項等功能 ( API 和 UI 設計稿由六角學院提供 )。",
      img: TodoListImg,
      demo: "https://zeoxer.github.io/TodoListAPI",
      source: "https://github.com/ZeoXer/TodoListAPI",
      bgName: "bg-todo",
    },
    {
      id: 2,
      title: "chatTalker",
      description:
        "利用 HTML、SCSS 和 bootstrap5 建立前端包含響應式的頁面，並搭配 jQuery 來完成網頁中之互動效果 ( 設計稿由六角學院提供 )。",
      img: ChatTalkerImg,
      demo: "https://zeoxer.github.io/chatTalker",
      source: "https://github.com/ZeoXer/chatTalker",
      bgName: "bg-chat",
    },
    {
      id: 3,
      title: "memeGenerator",
      description: "",
      img: "",
      demo: "",
      source: "",
      bgName: "",
    },
    {
      id: 4,
      title: "pttCrawler",
      description: "",
      img: "",
      demo: "",
      source: "",
      bgName: "",
    },
    {
      id: 5,
      title: "VisualizeNBAData",
      description: "",
      img: "",
      demo: "",
      source: "",
      bgName: "",
    },
  ];

  return (
    <ContentBlock id={id} bg={bgName}>
      <Title>作品集</Title>
      <PortfolioContent workList={workList} />
    </ContentBlock>
  );
};

export default Portfolio;
