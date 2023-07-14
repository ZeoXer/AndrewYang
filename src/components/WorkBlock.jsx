import classNames from "classnames";
import { TbHandFinger } from "react-icons/tb";

const WorkBlock = ({ onOpen, id, bgName, title }) => {
  const outerClasses = classNames(
    "w-40 h-40 mr-10 mb-10 rounded-xl cursor-pointer relative group",
    "transition hover:scale-110 hover:ease-in-out hover:shadow-lg",
    "flex items-center bg-cover bg-center",
    `${bgName}`,
    // for dev
    "bg-slate-400"
  );

  const innerClasses = classNames(
    "absolute inset-0 rounded-xl text-white text-lg hidden lg:flex justify-center items-center",
    "bg-gray-900 opacity-0 transition hover:opacity-80 hover:ease-in-out"
  );

  return (
    <div className={outerClasses} onClick={() => onOpen(id)}>
      <div className={innerClasses}>{title}</div>
      <TbHandFinger className="absolute -bottom-12 left-16 text-4xl text-cyan-950 animate-bounce hidden group-hover:block" />
    </div>
  );
};

export default WorkBlock;
