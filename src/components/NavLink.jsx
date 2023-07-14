const NavLink = ({ href, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetPoint = e.target.getAttribute("href");
    const targetPos = document.querySelector(targetPoint).offsetTop - 60;

    window.scrollTo({
      top: targetPos,
      behavior: "smooth",
    });
  };

  return (
    <a
      href={href}
      className="navbarScroll block mx-4 border-b-2 border-transparent hover:border-b-2 hover:border-amber-300"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default NavLink;
