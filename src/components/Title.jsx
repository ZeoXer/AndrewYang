import classNames from "classnames";

const Title = ({ children, textColor, additionClass }) => {
  const classes = classNames(
    "text-5xl md:text-7xl mb-6",
    textColor || "text-amber-300",
    additionClass
  );

  return <h2 className={classes}>{children}</h2>;
};

export default Title;
