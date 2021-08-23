import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/star-dark.css";

function Header() {
  const [isDark, setDark] = useState(false);
  const handleDark = () => {
    const divs = document.querySelectorAll("div");
    const header = document.querySelector("header");
    const star1 = document.getElementById("stars");
    const star2 = document.getElementById("stars2");
    const star3 = document.getElementById("stars3");
    star1.classList.toggle("stars-dark");
    star2.classList.toggle("stars-dark2");
    star3.classList.toggle("stars-dark3");
    divs.forEach((div) => div.classList.toggle("dark"));
    setDark(!isDark);
    header.classList.toggle("darkHeader");
  };

  isDark
    ? (document.body.style.backgroundColor = "#fff")
    : (document.body.style.backgroundColor = "#202020");
  const projectContainer = document.querySelectorAll(
    ".project-section__content"
  );
  isDark
    ? projectContainer.forEach(
        (container) =>
          (container.style.backgroundColor = "rgba(255, 255, 255, 0.8)")
      )
    : projectContainer.forEach(
        (container) =>
          (container.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
      );

  return (
    <>
      <header>
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="logo">
            <p>Y</p>
          </div>
        </Link>
        {isDark ? (
          <div className="toggle" style={{ border: "1px solid #282828" }}>
            <button
              id="toggleBtn"
              onClick={handleDark}
              style={{
                backgroundColor: "#282828",
                transform: "translateX(24px)",
                transition: "all 0.2s ease-in-out",
              }}
            ></button>
          </div>
        ) : (
          <div className="toggle">
            <button
              id="toggleBtn"
              onClick={handleDark}
              style={{
                transform: "translateX(0px)",
                transition: "all 0.2s ease-in-out",
              }}
            ></button>
          </div>
        )}
      </header>
    </>
  );
}
export default Header;
