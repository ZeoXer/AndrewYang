import classNames from "classnames";

const TabLink = ({ handleClick, showMode, width, children }) => {
  const classes = classNames(
    "p-2 bg-slate-400 w-1/5 cursor-pointer rounded-t-md relative text-lg",
    showMode,
    width
  );

  return (
    <button className={classes} onClick={handleClick}>
      {children}
    </button>
  );
};

export default TabLink;
