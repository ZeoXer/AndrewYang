import Title from "../Title";
import PersonalImg from "../../images/PersonalImg.png";

const ExperienceContent = () => {
  return (
    <div className="h-full border-4 border-cyan-950 relative flex items-center p-3">
      <Title additionClass="absolute -left-6 -top-6 bg-white">個人經歷</Title>
      <div className="flex items-center">
        <div className="w-3/4">
        </div>
        <img className="w-1/4" src={PersonalImg} alt="personalImg" />
      </div>
    </div>
  );
};

export default ExperienceContent;
