import classNames from "classnames";

const TimePoint = ({ order, item, pointShowMode, timeShowMode, onClick }) => {
  const pointClass = classNames(
    "relative w-10 h-10 rounded-full cursor-pointer bg-cover bg-center",
    "border-black border-2",
    "lg:hover:scale-125 transition ease-in-out",
    item.icon,
    pointShowMode
  );

  const timeStampClass = classNames(
    "absolute -left-7 -top-5 text-sm whitespace-nowrap md:block",
    timeShowMode || "hidden"
  );

  return (
    <div className="relative flex items-center">
      {/* 最左方的時間線 */}
      {order === 1 && <div className="w-3 md:w-20 lg:w-24 h-1 bg-black"></div>}
      {/* 時間軸點 */}
      <div className={pointClass} onClick={onClick}>
        <span className={timeStampClass}>{item.time}</span>
      </div>
      {/* 時間軸點下方的標題 */}
      {pointShowMode !== "" && (
        <span className="absolute -left-1/4 -bottom-10 p-1 rounded-lg text-base md:text-xl text-white bg-black whitespace-nowrap animate-fadeIn">
          {item.title}
        </span>
      )}
      {/* 最右方的時間線 + 箭頭 */}
      {order === -1 ? (
        <div className="flex items-center">
          <div className="w-3 md:w-20 lg:w-24 h-1 bg-black"></div>
          <div className="inline-block border-black border-r-4 border-b-4 p-1 rotate-[-45deg]"></div>
        </div>
      ) : (
        <div className="w-3 md:w-20 lg:w-24 h-1 bg-black"></div>
      )}
    </div>
  );
};

export default TimePoint;
