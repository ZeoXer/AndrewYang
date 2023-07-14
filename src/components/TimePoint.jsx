import classNames from "classnames";

const TimePoint = ({ order, item, showMode, onClick }) => {
  const pointClass = classNames(
    "relative w-10 h-10 rounded-full cursor-pointer bg-cover bg-center",
    "border-black border-2",
    "lg:hover:scale-125 transition ease-in-out",
    item.icon,
    showMode
  );

  return (
    <div className="relative flex items-center">
      {order === 1 && <div className="w-20 h-1 bg-black"></div>}
      <div className={pointClass} onClick={onClick}>
        <span className="absolute -left-7 -top-5 w-20 text-sm whitespace-nowrap">
          {item.time}
        </span>
      </div>

      {showMode !== "" && (
        <span className="absolute -left-1/4 -bottom-10 w-20 text-xl underline underline-offset-2 whitespace-nowrap">
          {item.title}
        </span>
      )}

      {order === -1 ? (
        <div className="flex items-center">
          <div className="md:w-16 lg:w-24 h-1 bg-black"></div>
          <div className="inline-block border-black border-r-4 border-b-4 p-1 rotate-[-45deg]"></div>
        </div>
      ) : (
        <div className="md:w-16 lg:w-24 h-1 bg-black"></div>
      )}
    </div>
  );
};

export default TimePoint;
