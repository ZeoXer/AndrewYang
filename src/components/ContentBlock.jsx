import { useEffect, useRef } from "react";
import classNames from "classnames";

const ContentBlock = ({ children, id, bg }) => {
  const blockRef = useRef();

  const handleBackgroundScroll = () => {
    const scrollPos = window.scrollY;
    blockRef.current.style.backgroundPositionY = -(scrollPos / 2) + "px";
  };

  useEffect(() => {
    document.addEventListener("scroll", handleBackgroundScroll);

    return () => {
      document.removeEventListener("scroll", handleBackgroundScroll);
    };
  }, []);

  const classes = classNames("h-screen relative p-10 bg-no-repeat bg-cover bg-fixed bg-top", bg)

  return (
    <div
      className={classes}
      ref={blockRef}
      id={id}
    >
      {children}
    </div>
  );
};

export default ContentBlock;
