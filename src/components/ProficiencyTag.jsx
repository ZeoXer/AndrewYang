import classNames from "classnames";

const ProficiencyTag = ({ item, showMode }) => {
  const classes = classNames(
    "text-sm bg-cyan-950 text-white rounded-md px-1 py-1",
    showMode
  );

  return <span className={classes}>{item.proficiency}%</span>;
};

export default ProficiencyTag;
