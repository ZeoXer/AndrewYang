import classNames from "classnames";

const TabContent = ({ showMode, children }) => {
  const classes = classNames(
    "p-3 bg-white rounded-b-md animate-fadeIn h-3/4 flex items-center relative",
    showMode || "hidden"
  );

  return <div className={classes}>{children}</div>;
};

export default TabContent;
