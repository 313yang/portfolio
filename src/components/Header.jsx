import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isDark, setDark] = useState(false);
  const handleDark = () => {
    const divs = document.querySelectorAll("div");
    const header = document.querySelector("header");
    divs.forEach((div) => div.classList.toggle("dark"));
    setDark(!isDark);
    header.classList.toggle("darkHeader");
  };

  isDark
    ? (document.body.style.backgroundColor = "white")
    : (document.body.style.backgroundColor = "black");
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
          (container.style.backgroundColor = "rgba(255, 255, 255, 0.05)")
      );
  return (
    <>
      {isDark ? (
        <video
          autoPlay
          muted
          loop
          className="video"
          src="./img/Waves.mp4"
          type="video/mp4"
        ></video>
      ) : (
        <video
          autoPlay
          muted
          loop
          className="video"
          src="./img/Waves - 447.mp4"
          type="video/mp4"
        ></video>
      )}
      <header>
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="logo">
            <p>Y</p>
            <p>★</p>
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
