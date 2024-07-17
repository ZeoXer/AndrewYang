import NavBar from "./components/NavBar";
import PersonalInfo from "./containers/PersonalInfo";
import Abilities from "./containers/Abilities";
import Portfolio from "./containers/Portfolio";
import Experience from "./containers/Experience";

const App = () => {
  return (
    <>
      <NavBar />
      <PersonalInfo
        id="personalInfo"
        bgName="bg-slate-400 md:bg-header polygon-in"
      />
      <div className="bg-slate-400">
        <Experience id="experience" bgName="bg-white polygon-in" />
      </div>
      <Abilities id="abilities" bgName="bg-slate-400" />
      <div className="bg-slate-400">
        <Portfolio id="portfolio" bgName="bg-white polygon-out" />
      </div>
    </>
  );
};

export default App;
