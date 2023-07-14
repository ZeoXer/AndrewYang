import { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import AvatarImg from "../images/AvatarImg.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "./SideBar";

const NavBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const navBarEl = useRef();

  const handleNavBarScroll = () => {
    const scrollPos = window.scrollY;
    const navbarScrollEl = document.querySelectorAll(".navbarScroll");

    if (scrollPos === 0) {
      navBarEl.current.classList.add("at-top");
      navBarEl.current.classList.remove("not-at-top");
    } else {
      navBarEl.current.classList.remove("at-top");
      navBarEl.current.classList.add("not-at-top");
    }

    navbarScrollEl.forEach((ele) => {
      const targetId = ele.getAttribute("href");
      const target = document.querySelector(targetId);

      if (
        target.offsetTop - 60 <= scrollPos &&
        target.offsetTop + target.offsetHeight - 60 > scrollPos
      ) {
        ele.classList.add("active");
      } else {
        ele.classList.remove("active");
      }
    });
  };

  const handleClickSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleNavBarScroll);

    return () => {
      document.removeEventListener("scroll", handleNavBarScroll);
    };
  }, []);

  return (
    <div
      ref={navBarEl}
      className="fixed w-full p-4 text-2xl z-30 top-0 left-0 flex justify-between at-top"
    >
      <div className="flex items-center ">
        <img className="w-10 rounded-full mr-2" src={AvatarImg} alt="avatar" />
        <h1 className="font-medium">
          <a href="#personalInfo">楊佳勳</a>
        </h1>
      </div>
      <ul className="hidden md:flex justify-between items-center">
        <li>
          <NavLink href="#experience">個人經歷</NavLink>
        </li>
        <li>
          <NavLink href="#abilities">專業能力</NavLink>
        </li>
        <li>
          <NavLink href="#portfolio">作品集</NavLink>
        </li>
      </ul>
      <button className="text-3xl md:hidden" onClick={handleClickSideBar}>
        <GiHamburgerMenu />
      </button>
      <SideBar isOpen={isSideBarOpen} handleClick={handleClickSideBar} />
    </div>
  );
};

export default NavBar;
