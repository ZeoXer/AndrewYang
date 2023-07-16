import ContentBlock from "../components/ContentBlock";
import ExperienceContent from "../components//contents/ExperienceContent";

const Experience = ({ id, bgName }) => {
  const experienceList = [
    {
      id: 1,
      icon: "bg-ntu",
      time: "2018.9 - 2023.1",
      title: "就讀國立臺灣大學 材料科學與工程學系",
      description:
        "大三是我踏入資訊領域的開始。大三下時修習了程式設計與資料分析這門課程，不但幫助我更加熟悉掌握 Python，更開啟了我對程式設計興趣的大門。大四我陸續修習了更多相關的課程，其中資料結構與演算法和物件導向設計兩門課程，前者透過深入淺出的概念講解以及扎實的作業練習，讓我對於 C 語言的熟悉度以及資料結構/演算法的掌握度都有大幅度的提升；後者針對物件導向設計、MVC 的概念做了詳盡的講解，課堂中也有小組出題、團體專案等活動，增進了自己的知識和實作能力。另外我也到補習班上課來補足沒辦法修習到的學科知識，如離散數學、計算機結構等。雖然在大學過程中發現本科系的內容並非自己真正嚮往的方向，但材料系的課程注重獨立思考和分析處理問題的能力，也幫助我在後續轉往資訊領域發展的路上提供莫大的助益。",
    },
    {
      id: 2,
      icon: "bg-shanfu",
      time: "2019.9 - 2022.7",
      title: "加入台大山服",
      description:
        "在大二時進入了台大山服，起初是以一般團員的身份，協助籌辦在台東新武部落的營隊活動，包括設計教案和在山上生活的各式技能，提升了我的思考創造力以及團體合作能力。後期接下社團的財務組長 / 委員職位，負責統籌社團的經費支出以及後續的核銷工作，並協助後進的組長可以順利的完成事務，培養了我面對大型事務的處理協調能力以及交際溝通能力。另一方面，我認為參加山服最重要的收穫是拓展自己的視野和思維，在服務的過程中我也重新審視「服務」本身的意義，以及自己從中獲得的自我價值認同。",
    },
    {
      id: 3,
      icon: "bg-hex",
      time: "2022.7 - Now",
      title: "六角學院助教",
      description:
        "一開始參加其舉辦的實習培育計畫，學習基礎的網頁切版技術，如 HTML、CSS、jQuery 等，計畫結束後擔任課程平台助教至今，並持續學習其它技能。從這個平台開始接觸到網頁相關的技術，開啟自己對網路方面、前後端工程的興趣，未來也計畫往後端的相關技能精進。",
    },
    {
      id: 4,
      icon: "bg-mrhost",
      time: "2022.11 - Now",
      title: "mrhost 實習",
      description:
        "在網路上偶然得知公司招募實習生的資訊，當時已經累積一些技術的我於是毅然決然決定挑戰自己，最後也幸運地獲得實習機會，在公司的這段時間內學到了很多新的知識和技術，除了運用原先會的 Python 網路爬蟲協助公司進行資料蒐集的工作，後續也根據需求學習了 Google App Script 進行 Google Sheet 表單資料的整合，以及鑽研 Golang 為專案架設伺服器、撰寫後端 API，未來的短期目標是將專案要求的 API 設計完畢，並著手進行前端的設計和串接前後端，整合成完整的應用。",
    },
  ];

  return (
    <ContentBlock id={id} bg={bgName}>
      <ExperienceContent experienceList={experienceList} />
    </ContentBlock>
  );
};

export default Experience;
