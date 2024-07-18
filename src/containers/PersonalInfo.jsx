import ContentBlock from "../components/ContentBlock";
import Title from "../components/Title";

const PersonalInfo = ({ id, bgName }) => {
  return (
    <ContentBlock id={id} bg={bgName}>
      <div className="flex items-center py-48">
        <div>
          <Title textColor="text-cyan-950">楊佳勳</Title>
          <p className="text-xl md:text-3xl">不畏挑戰並能快速適應</p>
          <p className="text-xl md:text-3xl">對資訊領域充滿熱忱和毅力</p>
          <p className="text-xl md:text-3xl">增長多向技能樹，開拓全新賽道</p>
        </div>
      </div>
    </ContentBlock>
  );
};

export default PersonalInfo;
