import classNames from "classnames";

const TabContent = ({ showMode, children }) => {
  const classes = classNames(
    "py-16 px-3 md:p-3 bg-white rounded-b-md animate-fadeIn h-3/4 flex items-start md:items-center relative",
    showMode || "hidden"
  );

  return <div className={classes}>{children}</div>;
};

export default TabContent;
