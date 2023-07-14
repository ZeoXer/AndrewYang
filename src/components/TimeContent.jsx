import classNames from "classnames";

const TimeContent = ({ showMode, children }) => {
  const classes = classNames("px-4 pt-12", showMode || "hidden");

  return <div className={classes}>{children}</div>;
};

export default TimeContent;
