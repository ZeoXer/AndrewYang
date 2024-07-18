import ContentBlock from "../components/ContentBlock";
import Title from "../components/Title";
import BlogImg from "../images/BlogImg.png";
import TodoListImg from "../images/TodoListImg.png";
import ChatTalkerImg from "../images/ChatTalkerImg.png";
import MemeGeneratorImg from "../images/memeGenerator.png";
import PttCrawlerImg from "../images/pttCrawlerImg.png";
import VisualizeNBADataImg from "../images/VisualizeNBADataImg.png";
import PortfolioContent from "../components/contents/PortfolioContent";

const Portfolio = ({ id, bgName }) => {
  const workList = [
    {
      id: 1,
      title: "個人部落格",
      description:
        "在對前端、後端和資料庫有一定程度的熟悉度後所製作的個人部落格，前端使用 Nextjs 搭配 TailwindCSS 進行開發，後端則使用 Golang 串接 MySQL 資料庫。部署的部分則是使用 Vercel 實現簡易的 CI/CD，並搭配 AWS Lightsail 作為後端伺服器，並在 Cloudflare 設定網域、SSL 等設定。",
      img: BlogImg,
      demo: "https://blog.zeoxer.com/publish/ZeoXer",
      source: "https://github.com/ZeoXer/personal-blog",
      bgName: "bg-blog",
    },
    {
      id: 2,
      title: "TodoListAPI",
      description:
        "一個 TodoList 小應用，前端使用 HTML 搭配 SCSS 建構，後端則運用 TypeScript 串接 API，實作註冊、登入帳號以及新增、修改、刪除、篩選待辦事項等功能 ( API 和 UI 設計稿由六角學院提供 )。",
      img: TodoListImg,
      demo: "https://zeoxer.github.io/TodoListAPI",
      source: "https://github.com/ZeoXer/TodoListAPI",
      bgName: "bg-todo",
    },
    {
      id: 3,
      title: "chatTalker",
      description:
        "利用 HTML、SCSS 和 bootstrap5 建立前端包含響應式的頁面，並搭配 jQuery 來完成網頁中之互動效果 ( 設計稿由六角學院提供 )。",
      img: ChatTalkerImg,
      demo: "https://zeoxer.github.io/chatTalker",
      source: "https://github.com/ZeoXer/chatTalker",
      bgName: "bg-chat",
    },
    {
      id: 4,
      title: "memeGenerator",
      description:
        "此為在學校團體協作的專案，結合 Python 的文字辨識、網路爬蟲以及圖片處理，透過輸入一句詞語，讓程式將其中的片段替換成諧音詞，並在網路上自動抓取相關圖片，製作成一張諧音梗圖。",
      img: MemeGeneratorImg,
      demo: null,
      source: "https://github.com/Ergodica10002/memeGenerator",
      bgName: "bg-meme",
    },
    {
      id: 5,
      title: "pttCrawler",
      description:
        "結合網路爬蟲和 tkinter 相關套件，將爬取 ptt 網頁得到的內容呈現在視窗中，建立一個簡易的 ptt 文章閱讀器，具備搜尋、閱讀看板文章，以及儲存文章的功能。",
      img: PttCrawlerImg,
      demo: null,
      source: "https://github.com/ZeoXer/pttCrawler",
      bgName: "bg-ptt",
    },
    {
      id: 6,
      title: "VisualizeNBAData",
      description:
        "使用到 Python 透過網路爬蟲的方式取得 NBA 球隊的歷年數據資料，並使用 matplotlib 將資料視覺化的呈現出來，後續也加入 tkinter 的套件支援將程式打包成視窗化的應用。",
      img: VisualizeNBADataImg,
      demo: null,
      source: "https://github.com/ZeoXer/VisualizeNBAData",
      bgName: "bg-nba",
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
