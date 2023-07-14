import NavBar from "./components/NavBar";
import PersonalInfo from "./containers/PersonalInfo";
import Abilities from "./containers/Abilities";
import Portfolio from "./containers/Portfolio";
import Experience from "./containers/Experience";

const App = () => {
  return (
    <>
      <NavBar />
      <PersonalInfo id="personalInfo" bgName="bg-header" />
      <Experience id="experience" bgName="bg-white" />
      <Abilities id="abilities" bgName="bg-slate-400" />
      <Portfolio id="portfolio" bgName="bg-white" />
    </>
  );
};

export default App;
