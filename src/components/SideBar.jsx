import { createPortal } from "react-dom";
import NavLink from "./NavLink";
import { IoCloseSharp } from "react-icons/io5";

const SideBar = ({ isOpen, handleClick }) => {
  const sideBar = (
    <div className="animate-fadeIn">
      <div
        className="fixed inset-0 bg-gray-200 opacity-80 z-20"
        onClick={handleClick}
      ></div>
      <div className="fixed right-0 top-0 h-screen w-52 bg-cyan-950 text-white z-30">
        <button
          className="text-5xl font-bold absolute top-2 right-2"
          onClick={handleClick}
        >
          <IoCloseSharp />
        </button>
        <ul className="mt-20 text-2xl">
          <li className="my-4 text-center" onClick={handleClick}>
            <NavLink href="#experience">個人經歷</NavLink>
          </li>
          <li className="my-4 text-center" onClick={handleClick}>
            <NavLink href="#abilities">專業能力</NavLink>
          </li>
          <li className="my-4 text-center" onClick={handleClick}>
            <NavLink href="#portfolio">作品集</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );

  return createPortal(
    <>{isOpen && sideBar}</>,
    document.querySelector("#root")
  );
};

export default SideBar;
