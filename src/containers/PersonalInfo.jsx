import ContentBlock from "../components/ContentBlock";
import Title from "../components/Title";

const PersonalInfo = ({ id, bgName }) => {
  return (
    <ContentBlock id={id} bg={bgName}>
      <div className="flex items-center h-full">
        <div>
          <Title textColor="text-cyan-950">楊佳勳</Title>
          <p className="text-xl md:text-3xl text-amber-300 md:text-slate-400">
            不畏挑戰並能快速適應
          </p>
          <p className="text-xl md:text-3xl text-amber-300 md:text-slate-400">
            對資訊領域充滿熱忱和毅力
          </p>
          <p className="text-xl md:text-3xl text-amber-300 md:text-slate-400">
            增長多向技能樹，開拓全新賽道
          </p>
        </div>
      </div>
    </ContentBlock>
  );
};

export default PersonalInfo;
